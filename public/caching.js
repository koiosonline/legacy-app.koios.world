const cacheName = 'v1';
const console = this.console;


this.addEventListener('install', e => {
  console.log('Service Worker: Installed');
});


this.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  e.waitUntil(
    this.caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return this.caches.delete(cache); // Remove unwanted caches
          }
        })
      );
    })
  );
});

// fetch used.
this.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching', e);
  e.respondWith(
    this.fetch(e.request)
      .then(res => {
        if(e.request.method === "GET"){
          const responseClone = res.clone();
          this.caches.open(cacheName).then(cache => {
            cache.put(e.request, responseClone);
          });
        }
        return res;
      })
      .catch(() => this.caches.match(e.request).then(res => res))
  );
});
