importScripts("./lib/sww.js");
importScripts("./lib/bundle_cacher.17a8bf.js");
const distDir = "/game/slots/web-desktop/";
const worker = new self.ServiceWorkerWare();
const cdnUrl = "";
const ver_time = "1725435056639";
worker.use(new BundleAsyncCacher(distDir + "assets/", cdnUrl, true));
worker.init();
