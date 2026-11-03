// Carnival Midway offline cache. Bump VERSION when you change any file.
const VERSION = "midway-v37";
const CORE = [
  "./", "index.html", "coins.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png", "favicon-32.png",
  "down-the-clown/", "down-the-clown/index.html",
  "down-the-clown/img/glasses.webp", "down-the-clown/img/tophat.webp", "down-the-clown/img/bald.webp", "down-the-clown/img/redhead.webp",
  "gabby-abby/", "gabby-abby/index.html", "gabby-abby/img/face.webp", "gabby-abby/img/sign.webp",
  "gabby-abby/img/tooth0.webp", "gabby-abby/img/tooth1.webp", "gabby-abby/img/tooth2.webp",
  "gabby-abby/img/tooth3.webp", "gabby-abby/img/tooth4.webp", "gabby-abby/img/tooth5.webp",
  "sonnys-big-head/", "sonnys-big-head/index.html", "sonnys-big-head/img/sonny.webp",
  "duck-duck-splash/", "duck-duck-splash/index.html", "duck-duck-splash/img/glasses.webp", "duck-duck-splash/img/tophat.webp", "duck-duck-splash/img/bald.webp",
  "dunk-tank/", "dunk-tank/index.html", "dunk-tank/img/bald.webp", "dunk-tank/img/glasses.webp", "dunk-tank/img/bandana.webp", "dunk-tank/img/tophat.webp",
  "ventriloquist/", "ventriloquist/index.html", "ventriloquist/bits.js", "ventriloquist/img/sonny.webp", "ventriloquist/img/eddie-top.webp", "ventriloquist/img/eddie-jaw.webp",
  "fortune-sonny/", "fortune-sonny/index.html", "fortune-sonny/fortunes.js", "fortune-sonny/img/sonny.webp", "fortune-sonny/img/machine.webp", "fortune-sonny/img/card.webp",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("midway-") && k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Serve from cache right away, refresh the cache in the background.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(VERSION).then(async cache => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const fresh = fetch(e.request).then(res => {
      if (res && (res.ok || res.type === "opaque")) cache.put(e.request, res.clone());
      return res;
    }).catch(() => cached);
    return cached || fresh;
  }));
});
