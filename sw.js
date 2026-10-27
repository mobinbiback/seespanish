// کش برای کار آفلاین: بعد از اولین باز شدن، صفحه‌ها و داده‌ها بدون اینترنت هم باز می‌شوند.
const CACHE = "seespanish-v9";
const SHELL = [
  "./", "index.html", "practice.html", "memory.html", "dictation.html", "exams.html",
  "manifest.json", "icon.svg",
  "data/data.js", "data/explain.js", "data/explain-b1.js", "data/explain-b2.js",
  "data/explain-c1.js", "data/explain-c2.js", "data/progress.js",
  "data/practice.js", "data/practice-extra.js", "data/practice-b1.js", "data/practice-b2.js",
  "data/practice-more.js", "data/vocab-more.js", "data/vocab-b1.js", "data/vocab-b2.js",
  "data/vocab-c1.js", "data/vocab-c2.js",
  "listening.html", "data/listening.js",
  "fonts/fonts.css", "fonts/IRANYekanX-Light.ttf", "fonts/IRANYekanX-Regular.ttf",
  "fonts/IRANYekanX-Medium.ttf", "fonts/IRANYekanX-DemiBold.ttf", "fonts/IRANYekanX-Bold.ttf", "fonts/IRANYekanX-Black.ttf",
  "fonts/Nunito-Regular.ttf", "fonts/Nunito-SemiBold.ttf", "fonts/Nunito-Bold.ttf", "fonts/Nunito-ExtraBold.ttf",
  "fonts/Vazirmatn-Regular.ttf", "fonts/Vazirmatn-Bold.ttf",
  "css/theme.css", "js/theme.js"
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

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match("index.html")))
  );
});
