/*
  صداهای کوتاه رابط کاربری (ساخته‌شده با مرورگر؛ فایل صوتی جدا ندارد).
  - صدای کلیک روی دکمه‌ها و پیوندها
  - صدای درست، غلط و تکمیل
  اگر صدا خاموش باشد (SEE_PREFS.soundOn() === false)، هیچ صدایی پخش نمی‌شود.
*/
(function () {
  if (typeof window === "undefined") return;
  var ctx = null;

  function audio() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function tone(freq, start, dur, type, gain) {
    var c = audio();
    if (!c) return;
    var o = c.createOscillator();
    var g = c.createGain();
    o.type = type || "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, c.currentTime + start);
    g.gain.exponentialRampToValueAtTime(gain || 0.18, c.currentTime + start + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
    o.connect(g);
    g.connect(c.destination);
    o.start(c.currentTime + start);
    o.stop(c.currentTime + start + dur + 0.02);
  }

  // بسته‌های رنگ صدا: هر بسته شکل موج و زیر و بمی متفاوتی دارد
  var PACKS = {
    soft:   { tap: "triangle", ok: "sine", bad: "triangle", done: "sine", pitch: 1.0 },
    bright: { tap: "square", ok: "triangle", bad: "sawtooth", done: "triangle", pitch: 1.12 },
    retro:  { tap: "square", ok: "square", bad: "sawtooth", done: "square", pitch: 0.92 }
  };
  function pack() {
    try { return PACKS[localStorage.getItem("seespanish:sfxpack:v1")] ? localStorage.getItem("seespanish:sfxpack:v1") : "soft"; } catch (e) { return "soft"; }
  }
  var SOUNDS = {
    tap:  function () { var k = PACKS[pack()]; tone(880 * k.pitch, 0, 0.06, k.tap, 0.12); },
    ok:   function () { var k = PACKS[pack()]; tone(660 * k.pitch, 0, 0.12, k.ok); tone(990 * k.pitch, 0.09, 0.16, k.ok); },
    bad:  function () { var k = PACKS[pack()]; tone(220 * k.pitch, 0, 0.22, k.bad, 0.08); tone(180 * k.pitch, 0.12, 0.22, k.bad, 0.08); },
    done: function () { var k = PACKS[pack()]; [523, 659, 784, 1046].forEach(function (f, i) { tone(f * k.pitch, i * 0.09, 0.2, k.done, 0.16); }); },
    streak: function () { [660, 880, 1100].forEach(function (f, i) { tone(f, i * 0.06, 0.12, "square", 0.08); }); }
  };

  function enabled() {
    return !(window.SEE_PREFS && typeof window.SEE_PREFS.soundOn === "function") || window.SEE_PREFS.soundOn();
  }

  window.SEE_SFX = {
    play: function (name) {
      if (!enabled()) return;
      if (SOUNDS[name]) SOUNDS[name]();
    },
    state: function () { return ctx ? ctx.state : "none"; },
    test: function () {
      var self = this;
      self.play("tap");
      setTimeout(function () { self.play("ok"); }, 300);
      setTimeout(function () { self.play("bad"); }, 700);
      setTimeout(function () { self.play("done"); }, 1100);
    }
  };

  // مرورگرها تا وقتی کاربر لمس نکرده صدا را باز نمی‌کنند؛ با اولین لمس آماده‌اش می‌کنیم
  document.addEventListener("pointerdown", function () { audio(); }, { once: true, capture: true });

  // هر دکمه یا پیوند روی صفحه، صدای کلیک کوتاه پخش می‌کند
  document.addEventListener("click", function (e) {
    var el = e.target && e.target.closest ? e.target.closest("button, a.btn, a.navlink, .tabbar a, .node") : null;
    if (!el) return;
    if (el.id === "soundSw" || el.classList.contains("no-sfx")) return;
    window.SEE_SFX.play("tap");
  }, true);
})();
