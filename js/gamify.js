/*
  انگیزه‌ی یادگیری (الهام از روش‌های رایج اپ‌های زبان، با طراحی و نام اختصاصی See Spanish):
  - روزهای پیاپی (streak): هر روز که فعالیت داشته باشی، یک روز به زنجیره اضافه می‌شود.
  - امتیاز تجربه (XP): هر پاسخ درست امتیاز بیشتری دارد.
  - هدف روزانه: با رسیدن به امتیاز هدف، نوار کامل می‌شود و تشویق می‌آید.
  داده‌ها در مرورگر ذخیره و با همگام‌سازی حساب هماهنگ می‌شوند (کلید seespanish:xp:v1).
*/
(function () {
  if (typeof window === "undefined") return;
  var KEY = "seespanish:xp:v1";
  var GOAL = 30;

  function today() { return new Date().toISOString().slice(0, 10); }
  function yesterday() { var d = new Date(); d.setDate(d.getDate() - 1); return d.toISOString().slice(0, 10); }

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(st) {
    try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {}
  }

  function state() {
    var st = load();
    if (st.day !== today()) { st.todayXp = 0; st.day = st.day || today(); }
    return { xp: st.xp || 0, streak: st.streak || 0, todayXp: st.todayXp || 0, day: st.day || today(), last: st.last || null, goal: GOAL };
  }

  function record(points) {
    var st = load();
    var t = today();
    if (st.day !== t) { st.todayXp = 0; st.day = t; }
    if (st.last !== t) {
      st.streak = st.last === yesterday() ? (st.streak || 0) + 1 : 1;
      st.last = t;
    }
    st.xp = (st.xp || 0) + points;
    st.todayXp = (st.todayXp || 0) + points;
    save(st);
    render();
  }

  function render() {
    var box = document.getElementById("gameBar");
    if (!box) return;
    var s = state();
    var pct = Math.min(100, Math.round((s.todayXp / s.goal) * 100));
    var done = s.todayXp >= s.goal;
    box.innerHTML =
      '<div class="gb-item" title="روزهای پیاپی"><span aria-hidden="true">🔥</span><b>' + s.streak + '</b><small>روز پیاپی</small></div>' +
      '<div class="gb-item" title="امتیاز"><span aria-hidden="true">⭐</span><b>' + s.xp + '</b><small>امتیاز</small></div>' +
      '<div class="gb-goal' + (done ? ' done' : '') + '" title="هدف امروز">' +
        '<div class="gb-goal-top"><small>هدف امروز</small><b>' + Math.min(s.todayXp, s.goal) + '/' + s.goal + '</b></div>' +
        '<div class="gb-bar"><i style="width:' + pct + '%"></i></div>' +
      '</div>';
  }

  window.SEE_GAME = { record: record, state: state, render: render };

  // هر پاسخ (درست یا غلط) از سیستم بازخورد می‌آید
  document.addEventListener("see:answer", function (e) {
    var ok = !!(e.detail && e.detail.ok);
    record(ok ? 10 : 2);
    if (ok && state().todayXp >= GOAL && !load().goalCelebrated) {
      var st = load(); st.goalCelebrated = today(); save(st);
      if (window.SEE_FX) SEE_FX.celebrate();
    }
  });

  document.addEventListener("DOMContentLoaded", render);
})();
