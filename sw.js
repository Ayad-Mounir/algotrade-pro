// ─────────────────────────────────────────────
//  AlgoTrade Pro — Service Worker
//  Update CACHE_VERSION on every new release
// ─────────────────────────────────────────────
const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME    = `algotrade-${CACHE_VERSION}`;

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600&family=Cairo:wght@300;400;600;700;900&display=swap'
];

// ── INSTALL: cache all static assets ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching assets for', CACHE_VERSION);
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ── ACTIVATE: remove old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    )
  );
  self.clients.claim();
});

// ── FETCH: network-first, fallback to cache ──
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone and update cache with fresh response
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => {
        // Offline fallback
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // For navigation requests, return the main app
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});
