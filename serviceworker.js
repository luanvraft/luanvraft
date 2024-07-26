var staticCacheName = "pwa_dice";

const filesToCache = [
	'./index.html',
	'./css/fontwasome-all.min.css',
	'./css/main.css',
	'./css/noscript.css',
	'./js/breakpoints.min.js',
	'./js/browser.min.js',
	'./js/jquery.min.js',
	'./js/main.js',
	'./js/util.js',
	'./images/'
];
 
self.addEventListener("install", function (e) {
	e.waitUntil(
		caches.open(staticCacheName).then(function (cache) {
			return cache.addAll(filesToCache);
		})
	);
});
 
self.addEventListener("fetch", function (event) {
	console.log(event.request.url);
 
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});
