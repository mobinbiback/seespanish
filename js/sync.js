/*
  همگام‌سازی پیشرفت با حساب Google.
  - وقتی کاربر وارد شده باشد، پیشرفت از سرور خوانده و با پیشرفت محلی ادغام می‌شود.
  - هر تغییر محلی (روی کلیدهای مشخص) با کمی تأخیر به سرور فرستاده می‌شود.
  - اگر وارد نشده باشد، هیچ کاری نمی‌کند و همه‌چیز مثل قبل کار می‌کند.
*/
(function () {
  var API = "https://seespanish-api.sub-ify.site/index.php";
  var TOKEN_KEY = "seespanish:token";
  var SYNC_KEYS = [
    "seespanish:progress:v2",
    "seespanish:memory:v1",
    "seespanish:stats:v1",
    "seespanish:passed:v1",
    "seespanish:plan:pref",
    "seespanish:today:v1"
  ];

  function token() {
    try { return localStorage.getItem(TOKEN_KEY); } catch (e) { return null; }
  }

  if (typeof Storage === "undefined") return;
  var origSet = Storage.prototype.setItem;
  var timers = {};

  function push(key, value) {
    var t = token();
    if (!t) return;
    fetch(API + "/sync", {
      method: "PUT",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + t },
      body: JSON.stringify({ key: key, value: value })
    }).catch(function () { /* آفلاین: بعداً دوباره ارسال می‌شود */ });
  }

  // هر ذخیره‌سازی محلی روی کلیدهای همگام، با تأخیر کوتاه به سرور هم فرستاده می‌شود
  Storage.prototype.setItem = function (key, value) {
    origSet.call(this, key, value);
    if (this === window.localStorage && SYNC_KEYS.indexOf(key) >= 0 && token()) {
      clearTimeout(timers[key]);
      timers[key] = setTimeout(function () { push(key, value); }, 800);
    }
  };

  // ادغام دو شیء JSON: هر دو طرف کلیدهایشان حفظ می‌شود؛ اگر تضاد بود، نسخه‌ی محلی برنده است
  function merge(remote, local) {
    if (remote && local && typeof remote === "object" && typeof local === "object" &&
        !Array.isArray(remote) && !Array.isArray(local)) {
      var out = {};
      Object.keys(remote).forEach(function (k) { out[k] = remote[k]; });
      Object.keys(local).forEach(function (k) {
        out[k] = (k in remote) ? merge(remote[k], local[k]) : local[k];
      });
      return out;
    }
    return local !== undefined && local !== null ? local : remote;
  }

  function pull() {
    var t = token();
    if (!t) return;
    fetch(API + "/sync", { headers: { "Authorization": "Bearer " + t } })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j || !j.ok || !j.data) return;
        var changed = false;
        SYNC_KEYS.forEach(function (key) {
          var localRaw = localStorage.getItem(key);
          var remoteRaw = j.data[key];
          if (remoteRaw == null && localRaw == null) return;
          if (remoteRaw == null) { push(key, localRaw); return; }
          if (localRaw == null) { origSet.call(localStorage, key, remoteRaw); changed = true; return; }
          var merged;
          try {
            merged = JSON.stringify(merge(JSON.parse(remoteRaw), JSON.parse(localRaw)));
          } catch (e) {
            merged = localRaw;
          }
          if (merged !== localRaw) { origSet.call(localStorage, key, merged); changed = true; }
          if (merged !== remoteRaw) push(key, merged);
        });
        // اگر چیزی تغییر کرد، صفحه یک بار بازخوانی می‌شود تا نمای پیشرفت به‌روز شود
        if (changed) location.reload();
      })
      .catch(function () { /* آفلاین: همان داده‌ی محلی */ });
  }

  pull();
})();
