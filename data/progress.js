/*
  ماژول پیشرفت مشترک: پاسخ‌ها، نقاط ضعف، نوار پیشرفت هر سطح، و برنامه‌ی امروز.
  همه‌چیز در localStorage مرورگر کاربر ذخیره می‌شود.
*/
(function () {
  const PROGRESS_KEY = "seespanish:progress:v2";   // همان کلید گرامرها در index.html
  const MEMORY_KEY = "seespanish:memory:v1";       // همان کلید مرور واژگان در memory.html
  const STATS_KEY = "seespanish:stats:v1";         // پاسخ‌های تمرین
  const DAY = 24 * 60 * 60 * 1000;

  function read(key) {
    try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* حافظه در دسترس نیست */ }
  }

  // stats = { correct: { itemId: true }, weak: { itemId: true } }
  function recordAnswer(itemId, correct) {
    const s = read(STATS_KEY);
    s.correct = s.correct || {};
    s.weak = s.weak || {};
    if (correct) {
      s.correct[itemId] = true;
      delete s.weak[itemId];
    } else {
      s.weak[itemId] = true;
      delete s.correct[itemId];
    }
    write(STATS_KEY, s);
  }

  function weakIds() {
    return Object.keys(read(STATS_KEY).weak || {});
  }

  function gradeKeysFor(level) {
    const G = window.SEE;
    const keys = [];
    for (const it of (G.grammar[level] || [])) {
      for (const bookId of Object.keys(it.refs || {})) keys.push(it.id + "|" + bookId);
    }
    return keys;
  }

  function levelProgress(level) {
    const G = window.SEE, P = window.SEE_PRACTICE;
    const prog = read(PROGRESS_KEY);
    const mem = read(MEMORY_KEY);
    const stats = read(STATS_KEY);

    const gKeys = gradeKeysFor(level);
    const grammarDone = gKeys.filter((k) => prog[k]).length;

    const vocab = (P.vocab[level] || []).map((v) => v.es);
    const vocabKnown = vocab.filter((w) => {
      const r = mem[level + "|" + w];
      return r && r.interval >= 2;   // کلمه‌ای که چند بار درست مرور شده
    }).length;

    const items = (P.items || []).filter((i) => i.level === level);
    const exDone = items.filter((i) => (stats.correct || {})[i.id]).length;

    return {
      grammar: { done: grammarDone, total: gKeys.length },
      vocab: { done: vocabKnown, total: vocab.length },
      exercises: { done: exDone, total: items.length }
    };
  }

  // برنامه‌ی امروز: ۵ واژه برای مرور، یک گرامر که هنوز علامت نخورده، یک تمرین (اولویت نقاط ضعف)
  function dailyPlan(level) {
    const G = window.SEE, P = window.SEE_PRACTICE;
    const prog = read(PROGRESS_KEY);
    const mem = read(MEMORY_KEY);
    const stats = read(STATS_KEY);
    const now = Date.now();

    const vocab = (P.vocab[level] || []);
    const due = vocab.filter((v) => {
      const r = mem[level + "|" + v.es];
      return !r || r.due <= now;
    });

    let grammar = null;
    for (const it of (G.grammar[level] || [])) {
      const keys = Object.keys(it.refs || {}).map((b) => it.id + "|" + b);
      if (keys.length && !keys.some((k) => prog[k])) { grammar = it; break; }
    }

    const items = (P.items || []).filter((i) => i.level === level);
    const weak = weakIds();
    const exercise = items.find((i) => weak.includes(i.id)) ||
                     items.find((i) => !(stats.correct || {})[i.id]) || null;

    return {
      words: due.slice(0, 5).map((v) => v.es),
      grammar: grammar ? { id: grammar.id, title: grammar.title } : null,
      exercise: exercise ? { id: exercise.id } : null
    };
  }

  // ---------- قفل سطح‌ها با آزمون ----------
  const PASS_KEY = "seespanish:passed:v1";
  const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];

  function passedLevels() {
    return read(PASS_KEY);
  }
  function setLevelPassed(level) {
    const p = read(PASS_KEY);
    p[level] = true;
    write(PASS_KEY, p);
  }
  // سطح A1 همیشه باز است؛ هر سطح دیگر وقتی باز می‌شود که آزمون سطح قبلی پاس شده باشد
  function levelOpen(level) {
    const i = LEVEL_ORDER.indexOf(level);
    if (i <= 0) return true;
    return !!passedLevels()[LEVEL_ORDER[i - 1]];
  }
  function lockMessage(level) {
    const i = LEVEL_ORDER.indexOf(level);
    const prev = LEVEL_ORDER[i - 1];
    return `سطح ${level} قفل است. اول آزمون سطح ${prev} را با حداقل ۷۰٪ درست پاس کن.`;
  }

  window.SEE_PROGRESS = { recordAnswer, weakIds, levelProgress, dailyPlan, DAY,
    passedLevels, setLevelPassed, levelOpen, lockMessage, LEVEL_ORDER, PASS_KEY, STATS_KEY, PROGRESS_KEY, MEMORY_KEY };
})();
