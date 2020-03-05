initWebappServiceWorker();
function initWebappServiceWorker() {
    // Empty string for released, otherwise contains the ref or version path
    var ref = "@relprefix@".replace("---", "").replace(/^\//, "");
    // We don't do offline for version paths, only named releases
    var isNamedEndpoint = ref.indexOf("/") === -1;
    // pxtRelId is replaced with the commit hash for this release
    var refCacheName = "makecode;" + ref + ";@pxtRelId@";
    var cdnUrl = "@cdnUrl@";
    var webappUrls = [
        // The current page
        "@targetUrl@/" + ref,
        "@simUrl@",
        // webapp files
        "/pxt-sample/semantic.js",
        "/pxt-sample/main.js",
        "/pxt-sample/pxtapp.js",
        "/pxt-sample/typescript.js",
        "/pxt-sample/marked/marked.min.js",
        "/pxt-sample/highlight.js/highlight.pack.js",
        "/pxt-sample/jquery.js",
        "/pxt-sample/pxtlib.js",
        "/pxt-sample/pxtcompiler.js",
        "/pxt-sample/pxtpy.js",
        "/pxt-sample/pxtblockly.js",
        "/pxt-sample/pxtwinrt.js",
        "/pxt-sample/pxteditor.js",
        "/pxt-sample/pxtsim.js",
        "/pxt-sample/pxtembed.js",
        "/pxt-sample/pxtworker.js",
        "/pxt-sample/pxtweb.js",
        "/pxt-sample/blockly.css",
        "/pxt-sample/semantic.css",
        "/pxt-sample/rtlsemantic.css",
        // blockly
        "/pxt-sample/blockly/media/sprites.png",
        "/pxt-sample/blockly/media/click.mp3",
        "/pxt-sample/blockly/media/disconnect.wav",
        "/pxt-sample/blockly/media/delete.mp3",
        // monaco; keep in sync with webapp/public/index.html
        "/pxt-sample/vs/loader.js",
        "/pxt-sample/vs/base/worker/workerMain.js",
        "/pxt-sample/vs/basic-languages/bat/bat.js",
        "/pxt-sample/vs/basic-languages/cpp/cpp.js",
        "/pxt-sample/vs/basic-languages/python/python.js",
        "/pxt-sample/vs/basic-languages/markdown/markdown.js",
        "/pxt-sample/vs/editor/editor.main.css",
        "/pxt-sample/vs/editor/editor.main.js",
        "/pxt-sample/vs/editor/editor.main.nls.js",
        "/pxt-sample/vs/language/json/jsonMode.js",
        "/pxt-sample/vs/language/json/jsonWorker.js",
        // charts
        "/pxt-sample/smoothie/smoothie_compressed.js",
        "/pxt-sample/images/Bars_black.gif",
        // gifjs
        "/pxt-sample/gifjs/gif.js",
        // ai
        "/pxt-sample/ai.0.js",
        // target
        "/pxt-sample/target.js",
        // These macros should be replaced by the backend
        "",
        "",
        "",
        "@targetUrl@/pxt-sample/monacoworker.js",
        "@targetUrl@/pxt-sample/worker.js"
    ];
    // Replaced by the backend by a list of encoded urls separated by semicolons
    var cachedHexFiles = decodeURLs("");
    var cachedTargetImages = decodeURLs("%2Fpxt-sample%2Fdocs%2Fstatic%2Fhero.png");
    // Duplicate entries in this list will cause an exception so call dedupe
    // just in case
    var allFiles = dedupe(webappUrls.concat(cachedTargetImages)
        .map(function (url) { return url.trim(); })
        .filter(function (url) { return !!url && url.indexOf("@") !== 0; }));
    var didInstall = false;
    self.addEventListener("install", function (ev) {
        if (!isNamedEndpoint) {
            console.log("Skipping service worker install for unnamed endpoint");
            return;
        }
        didInstall = true;
        console.log("Installing service worker...");
        ev.waitUntil(caches.open(refCacheName)
            .then(function (cache) {
            console.log("Opened cache");
            console.log("Caching:\n" + allFiles.join("\n"));
            return cache.addAll(allFiles).then(function () { return cache; });
        })
            .then(function (cache) {
            return cache.addAll(cachedHexFiles).catch(function (e) {
                // Hex files might return a 404 if they haven't hit the backend yet. We
                // need to catch the exception or the service worker will fail to install
                console.log("Failed to cache hexfiles");
            });
        })
            .then(function () { return self.skipWaiting(); }));
    });
    self.addEventListener("activate", function (ev) {
        if (!isNamedEndpoint) {
            console.log("Skipping service worker activate for unnamed endpoint");
            return;
        }
        console.log("Activating service worker...");
        ev.waitUntil(caches.keys()
            .then(function (cacheNames) {
            // Delete all caches that "belong" to this ref except for the current version
            var toDelete = cacheNames.filter(function (c) {
                var cacheRef = getRefFromCacheName(c);
                if (cacheRef === null || (cacheRef === ref && c !== refCacheName)) {
                    return true;
                }
                return false;
            });
            return Promise.all(toDelete.map(function (name) { return caches.delete(name); }));
        })
            .then(function () {
            if (didInstall) {
                // Only notify clients for the first activation
                didInstall = false;
                return notifyAllClientsAsync();
            }
            return Promise.resolve();
        }));
    });
    self.addEventListener("fetch", function (ev) {
        ev.respondWith(caches.match(ev.request)
            .then(function (response) {
            return response || fetch(ev.request);
        }));
    });
    function dedupe(urls) {
        var res = [];
        for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
            var url = urls_1[_i];
            if (res.indexOf(url) === -1)
                res.push(url);
        }
        return res;
    }
    function getRefFromCacheName(name) {
        var parts = name.split(";");
        if (parts.length !== 3)
            return null;
        return parts[1];
    }
    function decodeURLs(encodedURLs) {
        var cdnEscaped = "@" + "cdnUrl" + "@";
        return dedupe(encodedURLs.split(";")
            .map(function (encoded) { return decodeURIComponent(encoded).replace(cdnEscaped, cdnUrl).trim(); }));
    }
    function notifyAllClientsAsync() {
        var scope = self;
        return scope.clients.claim().then(function () { return scope.clients.matchAll(); }).then(function (clients) {
            clients.forEach(function (client) { return client.postMessage({
                type: "serviceworker",
                state: "activated",
                ref: ref
            }); });
        });
    }
}
