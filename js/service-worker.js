self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("app-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/css/style.css",
          "/js/script.js",
          "/icone 2/icon-192x192.png",
          "/icone 2/icon-512x512.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  

