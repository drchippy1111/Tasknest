
const CACHE_NAME = "tasknest-v1";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/taskmanager.html",
  "/balance-sheet.html",
  "/collab-hub.html",
  "/ads-posting.html",
  "/business-writer.html",
  "/login.html",
  "/register.html",
  "/assets/logo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});