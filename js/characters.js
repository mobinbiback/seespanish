/*
  شخصیت‌های اصلی سایت (طراحی اختصاصی seespanish، بدون تصویر یا صدای بیرونی).
  - لولا: مربی اصلی
  - توماس: کمک واژه‌یاب
  صدا با همان صداهای داخل مرورگر و با زیر و بمی و سرعت متفاوت ساخته می‌شود.
*/
(function () {
  var CHARS = {
    lola: { name: "لولا", skin: "#F2C7A5", hair: "#2B2118", shirt: "#E76F51", bg: "#FBE3D6", pitch: 1.25, rate: 0.95, voiceIndex: 0 },
    tomas: { name: "توماس", skin: "#E9B88F", hair: "#8D6E4B", shirt: "#2A9D8F", bg: "#D5EFEB", pitch: 0.85, rate: 0.9, voiceIndex: 1 }
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
      : '';
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

  var API = "https://seespanish-api.sub-ify.site/index.php";
  var audioCache = {};

  // صدای ساخته‌شده‌ی سرور (Gemini TTS) با کلید و سهمیه‌ی خود سایت
  function serverSpeak(id, text) {
    var key = id + "|" + text;
    if (audioCache[key]) return Promise.resolve(audioCache[key]);
    var t = null;
    try { t = localStorage.getItem("seespanish:token"); } catch (e) {}
    if (!t) return Promise.reject(new Error("no-token"));
    return fetch(API + "/ai/tts", {
      method: "POST",
      headers: { "Authorization": "Bearer " + t, "Content-Type": "application/json" },
      body: JSON.stringify({ text: text, voice: id })
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

  function speakAs(id, text) {
    if (window.SEE_PREFS && !SEE_PREFS.soundOn()) return;
    if (!text) return;
    serverSpeak(id, text)
      .then(function (url) {
        var a = new Audio(url);
        return a.play();
      })
      .catch(function () { browserSpeak(id, text); });
  }

  window.SEE_CHARS = {
    list: CHARS,
    svg: svg,
    speakAs: speakAs
  };
})();
