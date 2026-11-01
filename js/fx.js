/*
  انیمیشن‌ها و تشویق:
  - SEE_FX.result(ok, el): پاسخ درست = صدای مثبت + تپش کوتاه؛ پاسخ غلط = صدای منفی + لرزش کوتاه
  - SEE_FX.celebrate(): باران رنگی برای تکمیل یک مرحله یا آزمون
  اگر کاربر «کم‌کردن حرکت» را فعال کرده باشد، فقط صدا پخش می‌شود.
*/
(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var COLORS = ["#F2C230", "#E76F51", "#2A9D8F", "#4FA3F7", "#B98FF0"];

  function play(name) { if (window.SEE_SFX) window.SEE_SFX.play(name); }

  function restart(el, cls) {
    if (!el || reduce) return;
    el.classList.remove(cls);
    void el.offsetWidth; // شروع دوباره‌ی انیمیشن
    el.classList.add(cls);
    setTimeout(function () { el.classList.remove(cls); }, 700);
  }

  function celebrate() {
    play("done");
    if (reduce) return;
    var layer = document.createElement("div");
    layer.className = "fx-confetti";
    layer.setAttribute("aria-hidden", "true");
    for (var i = 0; i < 46; i++) {
      var p = document.createElement("span");
      p.style.left = Math.round(Math.random() * 100) + "%";
      p.style.background = COLORS[i % COLORS.length];
      p.style.animationDelay = (Math.random() * 0.4).toFixed(2) + "s";
      p.style.animationDuration = (1.4 + Math.random() * 0.9).toFixed(2) + "s";
      p.style.transform = "rotate(" + Math.round(Math.random() * 360) + "deg)";
      layer.appendChild(p);
    }
    document.body.appendChild(layer);
    setTimeout(function () { layer.remove(); }, 2600);
  }

  window.SEE_FX = {
    result: function (ok, el) {
      play(ok ? "ok" : "bad");
      restart(el, ok ? "fx-pop" : "fx-shake");
    },
    streak: function () { play("streak"); },
    celebrate: celebrate
  };
})();
