const cacheName = 'v1';
const console = this.console;

const CACHE_FLAGS = [
  /http(s|):\/\/.+\.(svg|png|PNG|jpg|jpeg|ico|md|ttf)/g, // files we can cache and forget
  /http(s|):\/\/.+manifest\.json/g // just the manifest file. other JSON files might be updated too frequently
];

function cachable(url){
  return CACHE_FLAGS.some(r=>r.test(url)); // TODO: can we shrink?
}

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
  // storing non GET reqs not 'really' supported.
  if (e.request.method != "GET") return;

  console.log(`Service worker fetch for (${e.request.url})`);
  e.respondWith(
    (async function () {
      // Try to get the response from a cache.
      const cache = await this.caches.open(cacheName);
      const cachedResponse = await cache.match(e.request);

      if (cachedResponse) {
        e.waitUntil(cache.add(e.request));
        return cachedResponse;
      }else{
        return await this.fetch(e.request).then(res => {
          if(cachable(e.request.url)){
            console.log(`Stored result of ${e.request.url}`);
            const responseClone = res.clone();
            this.caches.open(cacheName).then(cache => {
              cache.put(e.request, responseClone);
            });
          } else {
            console.log(`NOT STORING... url (${e.request.url})`);
          }
          return res;
        });
      }
    })()
  );
});
