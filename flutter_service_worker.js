'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fc6f41b299a52291640feef26fe82d87",
"version.json": "897cd47a40c8cc9660259a68822e4334",
"index.html": "20f67b755a80399327331ea3b72d2b77",
"/": "20f67b755a80399327331ea3b72d2b77",
"main.dart.js": "e9304a1b6feed6ca542c780287b9d5d9",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"git.txt": "8dddccb24602fa57494546d381c053d0",
"favicon.png": "605e5816f11d26636d30a204b4439795",
"sqflite_sw.js": "a33648db91d964fd2b07ab8e663ee34f",
"google%20drive%20services.txt": "dadf0f15027e9cbfe6590e8d649ff754",
"icons/Icon-192.png": "edbf0408d73a24fc1a12910108d070b3",
"icons/Icon-maskable-192.png": "edbf0408d73a24fc1a12910108d070b3",
"icons/Icon-maskable-512.png": "0346c9957fdb34f87942c2578167d6f1",
"icons/Icon-512.png": "0346c9957fdb34f87942c2578167d6f1",
"manifest.json": "07f2968069a6d48e652c6fbc4c019e43",
"google2e5ea6bddf9d9f3e.html": "f0829ee2ca19d80f528d97c05c29d7b2",
"google_drive_upload_service.dart.txt": "2d8a02d74973ede12a54c634f0dc48c2",
"sitemap.xml": "c118359555a833975258bd1fb00d2f73",
".git/ORIG_HEAD": "906f2825394062a3d51b759ee04658df",
".git/config": "7be66f9e792f28589d79b3fcca09dffe",
".git/objects/0d/78ea0d0d602ceaf07f1107b868f7b577aed04d": "6065253f329a81660235437028ac0851",
".git/objects/95/57a80bfd64f2c3eda44567672229f90b46487c": "1b16bb5d24f7c1293b43876258dfebe3",
".git/objects/59/48203a8dce092d68453f3dff207d438b951c36": "80b4539a21cfc9bc5fd57cf2b5fd5559",
".git/objects/9e/5f9cb7459e91dd18a5f70309c44fe2575d7c39": "e133b5ae3c43e7c5736eef13e8bbc54b",
".git/objects/9e/241b8ed3fca747fc38f0cc35a8b10301a87ac3": "ce0e1c380d8ff6cb55af10663edc0e63",
".git/objects/04/700b638c6786f2562c271cf285b5ca7fd81099": "0b4c87512950bb16993a036cfd2968c6",
".git/objects/3c/413bb5214a69f7931dd5991a36f454edc19fc1": "55fa63bd0178cda8e854196438702297",
".git/objects/51/352a79804c09f883ced453ac328924cca5d365": "32d6b8bb5606bc3288d1a388bf927856",
".git/objects/93/53acf5aaa5582c4287b1ef8059ad1718331ec2": "61f40366bfd6a81727ddf76e220bafcf",
".git/objects/33/cf8a563b0306daa23271f0cb17e644de294663": "e0a5e9ad6f0ade50dbc528b7ca6de384",
".git/objects/33/f40873a6656fd3c616241ec95549408041e12d": "0c85b5884b08ccd829d9c52a84c0edce",
".git/objects/b5/357c64ce8d5156f68ed48fe499a9c9c665995c": "031d1ff2ab91d7b2b5974cc865056bb5",
".git/objects/b3/3a5c1fc327870dd9514e48fe561c74fef47cfb": "67b8340ff58bc12d8121dda182c6a99c",
".git/objects/df/55c5c894935917b056144ee091dd6649749067": "40b0a09e1a1c91dfe0d3bfc3f48602a3",
".git/objects/a2/1a2153a4c94f6e47a53208687b75fc5358bfe2": "e6b5badc4a58848a428ae2bc83d596ae",
".git/objects/a5/dda7da544d0e295838aa1c89e8205f8cb8d42e": "b6e07821eb5da38f3678c40f00915af1",
".git/objects/bc/6b6150d7dc1b9fae5f8161805270bc6b1cb148": "c6783a7ba8ec94751975add44d5d750c",
".git/objects/e2/fc43285a7923e4ad7693c4fdba6b1716f812cb": "32026b298eb4e5eadcc12acbe16c06a0",
".git/objects/f3/a9227ffa9da6f4a2b87978d2b652a941b1b046": "c1462d1c3c89ce4b406aaa3f1f95ca85",
".git/objects/ee/959133af842bbb78b63b0f1a5c7b427d822bf0": "901791693d302b7a98ea8002e513978f",
".git/objects/fd/fdf0694eb26d1bb30c3abd9ffb53c6125f880b": "38ca08a4e71145ae3983a86371c5bf8d",
".git/objects/fd/bd2fa89a9343b475aa09515bb27ef7a50606a9": "7caeee8a805d7a7dd2e46346ebe0b667",
".git/objects/fe/57850a27dd64c6791f215564e4fc36f0ab5c22": "9a167d578894419c85febaf8719511d9",
".git/objects/fb/527ece5058f858833c8f506b01dfc650ab9eb6": "ef0ae7dd38d6d758f76206fe53eedd76",
".git/objects/c1/ba50dd35e4c8bce97831885535c6981de6e5e0": "fb622796b3fe41047b3e6c9a20842297",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "c071319a7242e951039ba343446845d0",
".git/objects/pack/pack-4e54d0977bec743571344c7fea33f643c164a933.rev": "428ee9a08d7e3568272e51fdbfbe7356",
".git/objects/pack/pack-4e54d0977bec743571344c7fea33f643c164a933.pack": "82f349891c8b856df25dd530891d2e5b",
".git/objects/pack/pack-4e54d0977bec743571344c7fea33f643c164a933.idx": "4e0037efcb5c85a04bbf8a672f99cc62",
".git/objects/11/8f7b0e8f1f8878ba7ffdc001d0a42fe71446cb": "6d03a683fa48e8b85aadf0d81144ecd6",
".git/objects/11/da333aa35d323f39c2cfa417ea5abea2c48bc8": "945c7332106f209a2d8896ba3d55f49c",
".git/objects/16/a2405935a64a57c8ecb51a20d1089eb1ba6560": "cedd0d7edd379e1e1b2194520aebd5a7",
".git/objects/16/dd5775e4e4ad8793c8a51d66ce38ff1343d114": "989df217df52c169dff786c94cabf8d6",
".git/objects/87/ae0fb994ba3ff1b0e55b9511184bbd365de15c": "b373aaf52eb1a1f56ae9139e008a2424",
".git/objects/87/ef238f0eabb07e1fd55e1a0ffb0cb33d37e1d4": "a6ec0a49a7375dce2c1db05932c0f4d8",
".git/objects/74/2d9283f51c818dc2589c9c8068ecb6273d314e": "d48cbe4d35b0cfbf84b2184bdfb2a64b",
".git/objects/44/7709fc6d7b5676209388c3d99244105300b494": "c6c1a5a1d71026d6d47788ce0bd3ea53",
".git/objects/88/729577f7dd06e722a7c7c4b8c04c66234297d9": "51ee2f62b1d2792a90ec886eb092ca5d",
".git/objects/07/0571dc7f2cca6d20f26a8c38da3ec4116db9e2": "fcb6727bc7bed8bb43d508f090ace72a",
".git/objects/07/8fc0f3fef9f1b86c742b645676042ab486b2ba": "359ec33b352c691ae9016d04cdb3264d",
".git/objects/07/04590ef05b483081178f97d9551a7e8881203e": "26a728774a49e9bb1b27048ba1f47c03",
".git/objects/9a/02cab9614c7b69a88865cf410c7becf9d65a59": "feb02c0b8ad7b326c01aa76849d2ca0d",
".git/objects/9a/cffc8b6f100b0af03c011c426b1b07d8888661": "1d645f633910ac35288b06160c2457f5",
".git/objects/09/bc4da0037acebb71666e17a781931533588eb3": "49c5a2806e367e72b264450d5f9c99f7",
".git/objects/91/2aea4eee80782bfbf9c9821e8c80489fa9118d": "f915bb3c6f9ee642be89165e96a7252f",
".git/objects/91/b8c485145b367e41c15e406c85ed924c02a78b": "7c6b330c346b4d49ba70b84d2ca4bdba",
".git/objects/98/57196408bef9e357570aca9b05747b7d4283e0": "113f95af4b53f985d9368a4b85b3c8e4",
".git/objects/98/357e9084775ff471080a62e16dba20f3cf886a": "72e8101fb22ac250bf38fee7b29e121a",
".git/objects/37/d781a0539d8ca2ccca26d45500e454ba9f9e88": "8a875dc0a372a11fa4d86ae36a9530ca",
".git/objects/06/047eb04fbfaa01aacd6e6a67d5b576da825818": "68908398724a6ea5080f50a6df611e51",
".git/objects/0f/e26427ff9e222ecfe9ddb79e578e625fdf43f5": "0b518b37905aac8bddcdc7b921a4055d",
".git/objects/d3/9046780da5f01153df292a2608190b5b596892": "83bee2737ce79f07a0b43a9a26f710cd",
".git/objects/d4/967c30f69fbfd7e5be5a7862ea1ebf6cc8ba94": "463b0df39154f9efc60ab26598ba5835",
".git/objects/a7/4adffe5d5a7181caf04fd11f17d2d26035e90f": "fe11ccdfdd5ab458c808cc575a14a245",
".git/objects/b6/a3377421a395edc0bb092a0a6787306f7cb040": "92ef55cf2322ed58a9724dd00bbf53a3",
".git/objects/a9/0077a972b9aee4b767c9644489b480279033c6": "bd660d33b954abc8e1ea31e30d2eeeeb",
".git/objects/d2/05c69bc9b72028b0f8a149d415604fca3e6c81": "0ee80b6ecbc485f00fc78abc7b6ad5e4",
".git/objects/d2/40032e516b4d69d4849362c0359cfc721f2fd2": "1a1a7f55514ab781a4b4e64bc89497ab",
".git/objects/af/3f63b2addf037cbe7fa08d16becde05bf5ef6a": "212515af7dff13394fbe0d30dcf12b1f",
".git/objects/a1/d28228b398209d7fb27f2d9cfa54a6622e6d79": "7f6940762dd10fe9101bb1603c95e574",
".git/objects/ea/59aca998d4c06a79c2697be85389d5415e34e9": "008e92f0dfebcdcd160a05708f467c13",
".git/objects/f9/47a2141256563dd1bcb7bf33794bde7807296d": "acbeb44e12f4d94895865d16d58816f0",
".git/objects/f9/76ba68c99ae6f1be08f248cec1cb597625dce1": "84538fd002a5ed4f54e1809d8227f333",
".git/objects/e8/ad883cc9528450301d7aa4c862b699f54f7cf2": "10f1db5b5b94ad9ce131bad3d4091aed",
".git/objects/fa/c9ae740095cff8253b4056de3b2ce405b3d74a": "2e53eb1436da051670f28336598c53d4",
".git/objects/e9/086635586985af5509b2fd1178da0648974214": "549106f4ede0a5aa5e1464249b7103a9",
".git/objects/f8/5f65cfa33d91ff968fe667a043d16744020322": "0cb5901355dc4131b67bc3271bc63f89",
".git/objects/70/ebaac1d505786e404f4f16d7228458aea0a801": "09af3e6050a047a1074368d96e24ecb8",
".git/objects/84/6e4ff8b46c1c57d84b97c820242e44404b385e": "e2587ebe34128c0c309dfb4010cae4dd",
".git/objects/84/fedab74da0e783a47f78aacd4391a7c2333355": "264bb92581376cf84804ce7fbfd56c61",
".git/objects/84/d0defd7891cb7ac76860b49f2c007bd1564168": "950520d0eafe78778f59e51145fa83d1",
".git/objects/4f/710b56f440738fb2de108cbe7d483d6bff7a70": "45a27162e175bf16e0653ad0d7ece26e",
".git/objects/8d/a197bb92217639473ee6d896a625a462cded85": "040c0d7d5eed486e2a1b979869ac12da",
".git/objects/15/5d44ac1d8a6111037fcd6f8b820d2ee7cf0941": "1d43f7c98801657913e3c97b2589b131",
".git/objects/8c/3e59f3e9e971b9d8f34979ceded16a0a7e3964": "9da9b2b8fd5ff389f364f3cd07d19913",
".git/objects/8c/0165f9bbc86bfd644907bd8e322dfd52a56125": "ecd1cefaa35c2a1709aa5aa64d29e21b",
".git/objects/2e/2117c2826f058e2c540710cd609763086a22b2": "f49ecab6e1ae70ad1417017eb614a949",
".git/objects/8b/4165793f5c113a097816ea27f89775fbf287aa": "5956c737ceb031dc1298823bf43a3d15",
".git/objects/8b/8b340f77fc1802ddea4da9418ad68575dcd09f": "cae9242c42e7fa308857f8212f255a6e",
".git/objects/7f/f3b4a5133d75f0927f52d857143d7fa7f41e95": "4f368c6baa94484776c04e607ec7d228",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1db7c96fdb099d085ff7816d10072661",
".git/logs/refs/heads/main": "8186cc5f30528d675b81812d34fc49e6",
".git/logs/refs/remotes/origin/main": "698a54ba86dae504843fcdf000905b7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3093f79a46ad519c82525a90b486acf8",
".git/refs/remotes/origin/main": "3093f79a46ad519c82525a90b486acf8",
".git/gk/config": "6ff1d92bce70bed054554c3ff02a6f94",
".git/index": "7bfc4cbc3eda96623b74f3ef1f250c5a",
".git/COMMIT_EDITMSG": "994e6cd852be158a85a25f866d27122a",
".git/FETCH_HEAD": "219a336c3d1bc2cee48733f2a9c84d29",
"assets/AssetManifest.json": "c1d1aa8f92e10a33f4d58f9f240d2763",
"assets/NOTICES": "9f32e5ec442f5974fd60989c6b46d0ae",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "27af94ae55b282234de4440da7754972",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1e5d47a0bc1559e57273e04652e4751f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "96c05b9d038519517e203bd411a63e0b",
"assets/fonts/MaterialIcons-Regular.otf": "0ead3d93ea86cd030aec69249e8d3ea9",
"assets/assets/database/data.db": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/logo_la_pena.jpg": "605e5816f11d26636d30a204b4439795",
"assets/assets/images/whatsapp_logo.png": "51aa1b1a6394348bb37db9146ec4a7f5",
"assets/assets/images/instagram_logo.png": "26d9974a1feec9905a4e0d5e5ddf8db6",
"assets/assets/images/banner_la_pena.jpg": "bc636b34d649785d3100e6e4a7584dc2",
"robot.txt": "545e3d575745c23577bf43337b5f0461",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
