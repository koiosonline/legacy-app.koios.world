let cacheName = this.fetch("https://api.github.com/repos/koiosonline/app.koios.world/releases/latest")
  .then(_=>_.json())
  .then(d=>d.name || "ERR");

const console = this.console;

const CACHE_FLAGS = [
  /http(s|):\/\/.+\.(svg|png|PNG|jpg|jpeg|ico|md|ttf)/g, // files we can cache and forget
  /http(s|):\/\/.+manifest\.json/g // just the manifest file. other JSON files might be updated too frequently
];

function cachable(url){
  return CACHE_FLAGS.some(r=>r.test(url));
}

this.addEventListener('install', e => {
  console.log('Service Worker: Installed');
});


this.addEventListener('activate', e => {
  console.log('SW Activated');
  e.waitUntil(
    this.caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(async cache => {
          if (cache !== await cacheName) {
            return this.caches.delete(cache); // Remove unwanted caches
          }
        })
      );
    })
  );
});

// fetch used.
this.addEventListener('fetch', async e => {
  // storing non GET reqs not 'really' supported.
  if (e.request.method != "GET") return;

  e.respondWith(
    (async function () {
      // Try to get the response from a cache.
      const cache = await this.caches.open(await cacheName);
      const cachedResponse = await cache.match(e.request);

      if (cachedResponse) {
        e.waitUntil(cache.add(e.request));
        return cachedResponse;
      }else{
        return await this.fetch(e.request).then(async res => {
          if(cachable(e.request.url)){
            const responseClone = res.clone();
            this.caches.open(await cacheName).then(cache => {
              cache.put(e.request, responseClone);
            });
          }
          return res;
        });
      }
    })()
  );
});

function emptyOldCache() {
  this.caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(async cache => {
        if (cache !== await cacheName) {
          return this.caches.delete(cache);
        }
      })
    );
  });
}
this.addEventListener('message', async e => {
  if(await cacheName !== e.data){
    console.log(`Updating SW version to ${e.data}`);
    cacheName = e.data;
    emptyOldCache();
  }
});