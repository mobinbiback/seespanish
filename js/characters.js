/*
  شخصیت‌های اصلی سایت (طراحی اختصاصی seespanish، بدون تصویر یا صدای بیرونی).
  - لولا: مربی اصلی
  - توماس: کمک واژه‌یاب
  صدا با همان صداهای داخل مرورگر و با زیر و بمی و سرعت متفاوت ساخته می‌شود.
*/
(function () {
  var CHARS = {
    lola: { name: "لولا", skin: "#F2C7A5", hair: "#2B2118", shirt: "#E76F51", bg: "#FBE3D6", pitch: 1.25, rate: 0.95, voiceIndex: 0 },
    tomas: { name: "توماس", skin: "#E9B88F", hair: "#8D6E4B", shirt: "#2A9D8F", bg: "#D5EFEB", pitch: 0.85, rate: 0.9, voiceIndex: 1 },
    rosa: { name: "روزا", skin: "#D9A07A", hair: "#BDBDBD", shirt: "#6200BE", bg: "#EADFF9", pitch: 1.05, rate: 0.88, voiceIndex: 0 }
  };

  // چهره بر اساس حالت: normal | happy | sad
  function mouth(mood) {
    if (mood === "happy") return '<path d="M48 74 Q60 88 72 74" fill="none" stroke="#3B2A20" stroke-width="3" stroke-linecap="round"/>';
    if (mood === "sad") return '<path d="M48 82 Q60 72 72 82" fill="none" stroke="#3B2A20" stroke-width="3" stroke-linecap="round"/>';
    return '<path d="M50 76 H70" fill="none" stroke="#3B2A20" stroke-width="3" stroke-linecap="round"/>';
  }

  function svg(id, mood) {
    var c = CHARS[id] || CHARS.lola;
    var hairCap = id === "tomas"
      ? '<rect x="34" y="24" width="52" height="12" rx="6" fill="' + c.hair + '"/>'
      : '<path d="M30 56 Q30 22 60 22 Q90 22 90 56 Q84 36 60 34 Q36 36 30 56 Z" fill="' + c.hair + '"/>';
    var ponytail = id === "lola"
      ? '<circle cx="90" cy="60" r="10" fill="' + c.hair + '"/>'
      : (id === "rosa" ? '<circle cx="60" cy="18" r="9" fill="' + c.hair + '"/>' : '');
    var brows = mood === "sad"
      ? '<path d="M42 46 L52 49" stroke="#3B2A20" stroke-width="2.5" stroke-linecap="round"/><path d="M68 49 L78 46" stroke="#3B2A20" stroke-width="2.5" stroke-linecap="round"/>'
      : '<path d="M42 48 H52" stroke="#3B2A20" stroke-width="2.5" stroke-linecap="round"/><path d="M68 48 H78" stroke="#3B2A20" stroke-width="2.5" stroke-linecap="round"/>';
    var eyes = mood === "happy"
      ? '<path d="M44 58 Q48 53 52 58" fill="none" stroke="#3B2A20" stroke-width="2.5" stroke-linecap="round"/><path d="M68 58 Q72 53 76 58" fill="none" stroke="#3B2A20" stroke-width="2.5" stroke-linecap="round"/>'
      : '<circle cx="48" cy="58" r="3.5" fill="#3B2A20"/><circle cx="72" cy="58" r="3.5" fill="#3B2A20"/>';
    return '<svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">' +
      '<circle cx="60" cy="60" r="58" fill="' + c.bg + '"/>' +
      '<path d="M22 118 Q24 88 60 84 Q96 88 98 118 Z" fill="' + c.shirt + '"/>' +
      '<rect x="54" y="80" width="12" height="10" fill="' + c.skin + '"/>' +
      '<ellipse cx="60" cy="60" rx="30" ry="32" fill="' + c.skin + '"/>' +
      hairCap + ponytail + eyes + brows + mouth(mood) +
      '<circle cx="38" cy="68" r="4" fill="#F28B82" opacity=".5"/>' +
      '<circle cx="82" cy="68" r="4" fill="#F28B82" opacity=".5"/>' +
      '</svg>';
  }

  function voices() {
    if (!("speechSynthesis" in window)) return [];
    return window.speechSynthesis.getVoices().filter(function (v) { return v.lang && v.lang.indexOf("es") === 0; });
  }

  // فقط بخش‌های اسپانیایی متن را برای صدا نگه می‌داریم (فارسی و برچسب‌ها حذف می‌شوند)
  function spanishOnly(text) {
    var lines = String(text || "").split(/\n+/);
    var out = [];
    lines.forEach(function (line) {
      var m = line.match(/[A-Za-zÁÉÍÓÚÑáéíóúüñ¿¡][A-Za-zÁÉÍÓÚÑáéíóúüñ¿¡?!.,;:'"()\- ]*/g);
      if (!m) return;
      m.forEach(function (chunk) {
        var t = chunk.replace(/\s+/g, " ").trim();
        if (/[A-Za-zÁÉÍÓÚÑáéíóúüñ]{2,}/.test(t)) out.push(t);
      });
    });
    return out.join(" ").trim();
  }

  var API = "https://seespanish-api.sub-ify.site/index.php";
  var audioCache = {};
  // صدای انتخابی کاربر برای هر شخصیت (از صفحه‌ی من)
  function voicePref(id) {
    try { var v = JSON.parse(localStorage.getItem("seespanish:voice:v1")) || {}; return v[id] || ""; } catch (e) { return ""; }
  }

  // صدای ساخته‌شده‌ی سرور (Gemini TTS) با کلید و سهمیه‌ی خود سایت
  function serverSpeak(id, text) {
    var key = id + "|" + text + "|" + voicePref(id);
    if (audioCache[key]) return Promise.resolve(audioCache[key]);
    var t = null;
    try { t = localStorage.getItem("seespanish:token"); } catch (e) {}
    if (!t) return Promise.reject(new Error("no-token"));
    return fetch(API + "/ai/tts", {
      method: "POST",
      headers: { "Authorization": "Bearer " + t, "Content-Type": "application/json" },
      body: JSON.stringify({ text: text, voice: id, voice_name: voicePref(id) })
    }).then(function (r) {
      if (!r.ok) throw new Error("tts " + r.status);
      return r.blob();
    }).then(function (b) {
      var url = URL.createObjectURL(b);
      audioCache[key] = url;
      return url;
    });
  }

  // صدای داخل مرورگر (پشتیبان، بدون اینترنت)
  function browserSpeak(id, text) {
    if (!("speechSynthesis" in window)) return;
    var c = CHARS[id] || CHARS.lola;
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "es-ES";
    u.pitch = c.pitch;
    u.rate = c.rate;
    var vs = voices();
    if (vs.length) u.voice = vs[Math.min(c.voiceIndex, vs.length - 1)];
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  // متن را به بخش‌های فارسی و اسپانیایی می‌شکنیم تا هر کدام با صدای خودش خوانده شود
  function splitLangs(text) {
    var words = String(text || "").replace(/\n+/g, " ").split(/\s+/).filter(Boolean);
    var segs = [];
    words.forEach(function (w) {
      var lang = /[A-Za-zÁÉÍÓÚÑáéíóúüñ¿¡]/.test(w) ? "es" : (/[\u0600-\u06FF]/.test(w) ? "fa" : null);
      var last = segs[segs.length - 1];
      if (!lang) {
        if (last) last.text += " " + w; else segs.push({ lang: "fa", text: w });
        return;
      }
      if (last && last.lang === lang) last.text += " " + w;
      else segs.push({ lang: lang, text: w });
    });
    return segs.map(function (x) { return { lang: x.lang, text: x.text.trim() }; })
      .filter(function (x) { return x.text; });
  }

  function voicesFor(prefix) {
    if (!("speechSynthesis" in window)) return [];
    return window.speechSynthesis.getVoices().filter(function (v) {
      return v.lang && v.lang.toLowerCase().indexOf(prefix) === 0;
    });
  }

  // پخش یک بخش با صدای مرورگر و برگرداندن وعده‌ای که وقتی تمام شد حل می‌شود
  function browserPart(id, text, lang) {
    return new Promise(function (resolve) {
      if (!("speechSynthesis" in window)) return resolve();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      var vs = voicesFor(lang.slice(0, 2).toLowerCase());
      if (id && CHARS[id]) {
        u.pitch = CHARS[id].pitch;
        u.rate = CHARS[id].rate;
        if (vs.length) u.voice = vs[Math.min(CHARS[id].voiceIndex, vs.length - 1)];
      } else if (vs.length) {
        u.voice = vs[0];
      }
      u.onend = resolve;
      u.onerror = resolve;
      window.speechSynthesis.speak(u);
    });
  }

  function playUrl(url) {
    return new Promise(function (resolve, reject) {
      var a = new Audio(url);
      a.onended = resolve;
      a.onerror = reject;
      a.play().catch(reject);
    });
  }

  // بخش اسپانیایی: اول صدای سرور با صدای شخصیت، و اگر نشد، صدای مرورگر
  function spanishPart(id, text) {
    return serverSpeak(id, text)
      .then(playUrl)
      .catch(function () { return browserPart(id, text, "es-ES"); });
  }

  // بخش فارسی: اگر صدای فارسی روی دستگاه هست از آن استفاده می‌کنیم؛ وگرنه صدای سرور
  function persianPart(id, text) {
    if (voicesFor("fa").length) return browserPart(id, text, "fa-IR");
    return serverSpeak(id, text)
      .then(playUrl)
      .catch(function () { return browserPart(id, text, "fa-IR"); });
  }

  var currentRun = 0;

  function speakAs(id, rawText) {
    if (window.SEE_PREFS && !SEE_PREFS.soundOn()) return;
    var segs = splitLangs(rawText);
    if (!segs.length) return;
    var run = ++currentRun;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    var i = 0;
    function next() {
      if (run !== currentRun || i >= segs.length) return Promise.resolve();
      var seg = segs[i++];
      var part = seg.lang === "es" ? spanishPart(id, seg.text) : persianPart(id, seg.text);
      return part.catch(function () {}).then(next);
    }
    next();
  }

  window.SEE_CHARS = {
    list: CHARS,
    svg: svg,
    speakAs: speakAs,
    splitLangs: splitLangs
  };
})();
