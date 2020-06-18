const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/index.js",
  "/db.js",
  "/style.css",
];
const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        cache.addAll(FILES_TO_CACHE);
        console.log("Files have been added to cache");
      })
      .then(() => self.skipWaiting())
  );
});
