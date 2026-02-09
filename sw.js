self.addEventListener('fetch', (event) => {
  // This is a simple skeleton worker to satisfy PWA requirements
  event.respondWith(fetch(event.request));
});
