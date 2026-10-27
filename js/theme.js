/*
  تغییر حالت روشن / تیره.
  - اول از همه، تم ذخیره‌شده یا تم سیستم را قبل از نمایش صفحه تنظیم می‌کند (بدون چشمک).
  - بعد دکمه‌ای به هدر صفحه اضافه می‌کند و انتخاب کاربر را ذخیره می‌کند.
*/
(function () {
  var KEY = "seespanish:theme";
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* حافظه در دسترس نیست */ }
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));

  var btn = null;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(KEY, theme); } catch (e) { /* ignore */ }
    if (btn) {
      btn.textContent = theme === "dark" ? "☀" : "☾";
      btn.setAttribute("aria-label", theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تیره");
      btn.title = btn.getAttribute("aria-label");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");
    if (!header) return;
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.addEventListener("click", function () {
      apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
    header.appendChild(btn);
    apply(root.getAttribute("data-theme"));
  });
})();
