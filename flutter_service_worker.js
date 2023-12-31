'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f829514b46e7179fdf6ce911a2e2052e",
".git/config": "a1b52d9f4689b31a47747ea22fcb43fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cc9b8c23e0fa6845f4e86e79bf4caaac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ffcab43b4e45ef90d13c281358f4a865",
".git/logs/refs/heads/main": "607b6f88e959dbd8b91b4937f8398139",
".git/logs/refs/remotes/origin/main": "7bf3550a4e196b458b2dfcdd696814f2",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/4661abbe453e45395208907f19adfe10069863": "c61e44a525a9ea1ec57aa891ce9144a4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/1b95861e653a1816969ead031f5314603ecfa2": "16688f513d60801688b4a0c659ff6221",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/26/cf624754cbf9cf564e5c9d06c11641082b12b9": "fe9b069a8c5b63bca2f0e98af5ae5a25",
".git/objects/2a/0129e8b6ac0330a86e71e9f42da7a86ebcff53": "4c25da81b1553035a24b8f82a5b6819c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/ec5a17ddea780c80b1572de7d08d47d4b0daca": "7ed85a9885966b08d925611d55e303c8",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/d7975e34cd584652f07558233a8d9e2c998ae5": "41e6318ea82a58da44ed1616c78bb667",
".git/objects/38/eae8ed2ad2b2127e118335ab52d4ae40399ffd": "dbe169711955ed83bbdddd5972b4e967",
".git/objects/39/fa7a3f6d6ea3f21a6f56c5a8f35530b6dae44d": "2c35b4bd088ba45e10fda054b4f47890",
".git/objects/3a/4c35b09b47e7636fb46320de25957bba082da1": "3a6238d974ce8c25999e52469d39d50e",
".git/objects/3a/6075e96b166579eb9ec813565c173480c43f14": "7d69da382d68c93c574cae4591b732da",
".git/objects/41/646912e2a683f84c255426969f01dde84fc5dd": "dac6cf7396c96b33dc0f79b5ae62f2eb",
".git/objects/42/6ba78220bf38640dac4f4b28e8effab887ae81": "8f55d3e96b3d5748164366ca1d1eff33",
".git/objects/42/7a3aa78bdcac460f18d356b9a68661c60cd5d9": "68d9ed3bda32bfda62d2c73c03f5702f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/44061bb221b60a05231f932612635cdea3dac8": "99ef655656d0f325f552bf3eee24a384",
".git/objects/4e/780b989f907c57442fd94774079d81ae8d57e5": "d9434ad0f6d991db4c5235dbb7d11385",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/670799c19bfe3d36f0fd1402c060af49a3bd04": "2aeb36143fe05ca1f6431ae878e0666c",
".git/objects/60/c1634f3d5b078e82e691a5796b0ad4fd9f3902": "4418040af11989fc264e7d750b0e9109",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/88406334ffc7c594fc7521ef327935cf6f3d92": "989d3b9422b4a3fba94bb3d7961d0f85",
".git/objects/6e/84b27c396fed26adf4b7def540255ae9f4a984": "8542075bbd752fb2afd37339ea265fe1",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/5ec8145a74f6b65f0cfb5f5de64cb932e20948": "7d9f1ac414a47e31adea594efca4d99d",
".git/objects/81/ec80bd62d3a2470cdbe96170b97e540b5b5c0e": "dc6670d054804a75cf922af279171528",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/2a423fb24530c1c4e2b0853e444a9e72f25e77": "e1f4a5ca2327e0b42ff079f6f75a73dc",
".git/objects/90/907b0b6c2b9f43c02d2cfd15cb427f0133242a": "cf1c18109649451341b103f057a6f753",
".git/objects/99/9519b9ed1c58fff9c3693405f9ff8b22c888e0": "645b3f892bd932c3c4414e03c959653c",
".git/objects/9a/78535aefc0a81f8892183ff05560ccd8c9ab51": "320c5271aa9a22880fb1051e4e66a876",
".git/objects/9e/e9938dda4498b159ee8ba96dd266c60dbe2552": "e20313dedd8abcd692a1dfd109025632",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/bc7de56ca83b920ea0380a869ee6018d29d13c": "cc0882d4ad1b6a3ef655050ad7a92383",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/400d30eee3f60d8e8d04be42f1f43a5a1f72b0": "4bc09db1d27ef4d003b84e009fdafdc1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/f76c56ac2169a8fb1bb620d333ee0b04745e4d": "ca953dc98f4747965d5dcd31795116a5",
".git/objects/c5/5efc1e0bcb661b29af9838120adda9c4c4cf7e": "d4db3c56a7bb50361def88a62272b9be",
".git/objects/c8/5d46b8adf032487982c0099cf53e4904c4518b": "3bfa1a58a2d91ce55dbbf1a019b49c98",
".git/objects/cb/d4b1fb0056ccacbcd8ac99132c35e43f88abb1": "02b531591ade1966ddde1ec7a2801637",
".git/objects/cc/6abe03d55be3a66172c81bfd43de22270b980b": "ca4f399521b9f3f59b8f0693c1c19093",
".git/objects/cc/c2bf976fffe1a75d212933bea000128d5e48a1": "2ea5d3fc004b63f33d4855ab898355e8",
".git/objects/cc/cb9ec448ff8208b74db811de2ec8d27b4031a3": "0b3c565330736bd3caeb933b50f65839",
".git/objects/cc/d2c42406816419495abef75681df9faa290197": "2f74341b592cd2c3bce857f870623b7b",
".git/objects/d0/4fcfa91529ecb8258f4f954f36dffa1b77e6bc": "289f648db97e2e07e4aaef58d508111c",
".git/objects/d2/234d32b8230295b88d8545eceaab60a8c30834": "257cbaabee7f9d85f39f254d338e419d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/1eb85bf56c1368861d3e8fc82a0530a0f598fb": "cc09eb044a1b6b78d9cb14877cd32f5a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1d2a1d86f1c4b0ce00816181c68b6b94938da5": "cc36de4f3fe26dec0f147fe8ba56c558",
".git/objects/d7/cb97321cde706093cff1f7fcfa92cc059cee55": "17f49add01c2929d84e072b40c75ee4b",
".git/objects/d8/5b15b31bd8dde9ba1dcd85e22c0e3d320df009": "4b2107a2b6c456d834531f7ff5ccc9d8",
".git/objects/d8/86bf84ba48b064b77ec0386516e085292c26c4": "5ee2ba9b099a8de5406884ec01724713",
".git/objects/e0/88f0baaa17eb2af0822ef790f5a59af1c440e9": "9ddabf07656b9d677283c20bb363b5a9",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e2/821dcd3671fd3b2d94d98513a246c94a13c75d": "6eead7c94e1e739f0bc55e7595e410e3",
".git/objects/e5/fb1347a9b95198c7346f7dd4178bf85cbd761b": "6d3bba20604dd5ebb01a7c2fff4c8b5d",
".git/objects/e7/15167ee9b148aede2357e5aa297b28f03f0643": "de4163652bea418adaa5810eacd993ec",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/314662e7b24d23e0009160a56e620ff8f3d712": "9a61f1dc0f01efec786a42707978565d",
".git/objects/fe/8208af6eed325e79dc99434867f45bd75853ae": "cbddf9233deddff533373e529132ac0d",
".git/objects/fe/af55e5c2358ce837eb9280997413ea7d9382e6": "20091dc0f72a54a6a8410b95480a03fe",
".git/refs/heads/main": "ef3116693dd59d3bb53db3c2553d180c",
".git/refs/remotes/origin/main": "ef3116693dd59d3bb53db3c2553d180c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c514ef495c0aa3c42618c84c9fc99a06",
"assets/images/logo.png": "0ff09e47b6c1ffc075e6edfa71c873bf",
"assets/images/mylogo.png": "2b8dd75c37e664afa511db2bf1f053a6",
"assets/images/mypicture.jpg": "cd5be93039153149a7f3538131666550",
"assets/NOTICES": "4e4a3a04fef1b0066fdb02b992e699b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "59d37674ef35c6d1d2917ca755919f7e",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "4504724cea295033c0b8814699551dc3",
"icons/Icon-512.png": "3c99ef4b184f4a2e33bed58ddaa63b16",
"icons/Icon-maskable-192.png": "4504724cea295033c0b8814699551dc3",
"icons/Icon-maskable-512.png": "3c99ef4b184f4a2e33bed58ddaa63b16",
"index.html": "b630e7d31b64a222d2786674e57fc363",
"/": "b630e7d31b64a222d2786674e57fc363",
"main.dart.js": "111021d7684d5407a312c82515436fdd",
"manifest.json": "2e3456a37ea768d931cf2e4a3d8e50ea",
"my_icon.png": "cad04a13f5478ab9e2ee936a2fbd14a2",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
