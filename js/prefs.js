/*
  تنظیمات مشترک: صدا روشن یا خاموش.
  همه‌ی پخش صدا از این تابع رد می‌شود تا وقتی کاربر صدا را خاموش کرده، چیزی پخش نشود.
*/
(function () {
  var SOUND_KEY = "seespanish:sound";

  window.SEE_PREFS = {
    soundOn: function () {
      try { return localStorage.getItem(SOUND_KEY) !== "off"; } catch (e) { return true; }
    },
    setSound: function (on) {
      try { localStorage.setItem(SOUND_KEY, on ? "on" : "off"); } catch (e) { /* ignore */ }
      if (!on && "speechSynthesis" in window) window.speechSynthesis.cancel();
    },
    speak: function (text, rate) {
      if (!this.soundOn()) return;
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "es-ES";
      u.rate = rate || 0.9;
      window.speechSynthesis.speak(u);
    }
  };
})();
