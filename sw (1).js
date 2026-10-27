// seespanish · کش آفلاین
// صفحه‌های HTML و فایل‌های JS/CSS همیشه از شبکه تازه گرفته می‌شوند (اگر اینترنت بود)،
// و فقط در نبود اینترنت از کش استفاده می‌شود. فونت‌ها و تصاویر از کش سریع‌تر می‌آیند.
const CACHE = "seespanish-v13";
const SHELL = [
  "./", "index.html", "plan.html", "practice.html", "memory.html", "dictation.html", "listening.html",
  "notebook.html", "me.html", "test.html", "exams.html",
  "manifest.json", "icon.svg",
  "css/theme.css", "js/theme.js", "js/prefs.js",
  "data/data.js", "data/explain.js", "data/explain-b1.js", "data/explain-b2.js",
  "data/explain-c1.js", "data/explain-c2.js", "data/progress.js",
  "data/practice.js", "data/practice-extra.js", "data/practice-b1.js", "data/practice-b2.js",
  "data/practice-more.js", "data/vocab-more.js", "data/vocab-b1.js", "data/vocab-b2.js",
  "data/vocab-c1.js", "data/vocab-c2.js", "data/listening.js", "data/verbs.js",
  "fonts/fonts.css", "fonts/IRANYekanX-Light.ttf", "fonts/IRANYekanX-Regular.ttf",
  "fonts/IRANYekanX-Medium.ttf", "fonts/IRANYekanX-DemiBold.ttf", "fonts/IRANYekanX-Bold.ttf",
  "fonts/IRANYekanX-Black.ttf", "fonts/Nunito-Regular.ttf", "fonts/Nunito-SemiBold.ttf",
  "fonts/Nunito-Bold.ttf", "fonts/Nunito-ExtraBold.ttf", "fonts/Vazirmatn-Regular.ttf", "fonts/Vazirmatn-Bold.ttf"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function networkFirst(req) {
  return fetch(req).then((res) => {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
    return res;
  }).catch(() => caches.match(req).then((hit) => hit || caches.match("index.html")));
}

function cacheFirst(req) {
  return caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
    return res;
  }));
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isDoc = req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("/");
  const isCode = /\.(js|css)$/.test(url.pathname);
  if (url.origin === self.location.origin && (isDoc || isCode)) {
    e.respondWith(networkFirst(req));
  } else {
    e.respondWith(cacheFirst(req));
  }
});
