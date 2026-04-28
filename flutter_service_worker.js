'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "98085df0cc5b966f18f90a266922d577",
"assets/AssetManifest.bin.json": "9907844d6a267768fa76e8f54e7db0be",
"assets/assets/onboarding_1.png": "04cdf478c92bf7d5e138d22497026d40",
"assets/assets/onboarding_2.png": "420dd23170a90731e44eca7643552879",
"assets/assets/onboarding_3.png": "f742fa5a945d86756e4c517b72c6b783",
"assets/FontManifest.json": "40b12a256d61a8e4ce901924907e6fcf",
"assets/fonts/MaterialIcons-Regular.otf": "aa157b404eb04c7060167b900e916563",
"assets/NOTICES": "2e845e677f21c90a93834ae13ee334ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "019b68497ea016880c9f0bf99ce17285",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "8ba3d2a7635c74bcd5bac9a1a36d05bb",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "b2771d7899a39459aefd095bb261141b",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "15ab91a16f68fd3950c48ce11917472c",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "07cff2a304f73e9d4974f0dbc986a998",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "ce886fdfe60cc58983e0bc13c788b63e",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "975425c23ed1691f9e458d7f3a2cd386",
"assets/packages/shadcn_ui/fonts/Geist-Black.otf": "cf003c4f85b590cf60bec1e111ebaaf5",
"assets/packages/shadcn_ui/fonts/Geist-Bold.otf": "d3e1d3dc690224fd330969af598a9c31",
"assets/packages/shadcn_ui/fonts/Geist-Light.otf": "21f434e8c2b53240a0c459b9d119f22f",
"assets/packages/shadcn_ui/fonts/Geist-Medium.otf": "f7ceaf00b58d396cf93ff1ea43740027",
"assets/packages/shadcn_ui/fonts/Geist-Regular.otf": "4d02716b4f2f2e4d9c568c8d24e8e74d",
"assets/packages/shadcn_ui/fonts/Geist-SemiBold.otf": "2c0b1d3e7b1c71bedc2eecf78f7a1d1d",
"assets/packages/shadcn_ui/fonts/Geist-Thin.otf": "8603d0fe0def4273ebeee670eedcfb86",
"assets/packages/shadcn_ui/fonts/Geist-UltraBlack.otf": "f3591a030925294b2bb427e6a6c9b0d8",
"assets/packages/shadcn_ui/fonts/Geist-UltraLight.otf": "b64b37fbec0a925067cbf530e4962fec",
"assets/packages/shadcn_ui/fonts/GeistMono-Black.otf": "d72857791f93bbf88629ab9601ebfa14",
"assets/packages/shadcn_ui/fonts/GeistMono-Bold.otf": "fce632a1c87f36e92fb23ae5618176ce",
"assets/packages/shadcn_ui/fonts/GeistMono-Light.otf": "92c6dfb1c2854b6b0fd3f63ab5af9b7a",
"assets/packages/shadcn_ui/fonts/GeistMono-Medium.otf": "b1f17a06e50fba3f1e9695c2a8ae0783",
"assets/packages/shadcn_ui/fonts/GeistMono-Regular.otf": "42af0dfdb5e9e272e7ac28868b5b99fb",
"assets/packages/shadcn_ui/fonts/GeistMono-SemiBold.otf": "02036797116901c5db4a3a629561e588",
"assets/packages/shadcn_ui/fonts/GeistMono-Thin.otf": "cbf62a8e76578e03404b0314787d9477",
"assets/packages/shadcn_ui/fonts/GeistMono-UltraBlack.otf": "cfad4eb45ce5dff853a6c84c8a7d441b",
"assets/packages/shadcn_ui/fonts/GeistMono-UltraLight.otf": "45ea4a4ba1034f7fa081c8b7ee958734",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "c79e0158605093fe3b40eee1ca4a7999",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f563de82dcc7e3248b249445a0e6540c",
"/": "f563de82dcc7e3248b249445a0e6540c",
"main.dart.js": "0b373004a2db907d6372c714d8508252",
"main.dart.js_1.part.js": "095aa86c080262a0a7ad358685a5aa14",
"main.dart.js_100.part.js": "7e110d66abda5eb0f9eb6d059e2bf556",
"main.dart.js_102.part.js": "fddf1dca9c931ead7066ba6f7d3f4281",
"main.dart.js_103.part.js": "fba88090c48f00c937e569ddd64f49f8",
"main.dart.js_104.part.js": "920e7b3a7c60fea7a8a133d41fc3aeb6",
"main.dart.js_105.part.js": "4cf2670e109322da918fc7b5a162ee31",
"main.dart.js_106.part.js": "10435e8404f5f915227cb8d2b34c4432",
"main.dart.js_107.part.js": "950488b1b37e021a3148fc5afaf8977e",
"main.dart.js_108.part.js": "07792f67642d7bee788919bee3420570",
"main.dart.js_109.part.js": "554a0cda502712c62606b4dc9129a306",
"main.dart.js_11.part.js": "3bf843c3a2a1c6aa08bb65502791956c",
"main.dart.js_110.part.js": "47a8fe15e646228b0c2d92aaa7d3b33b",
"main.dart.js_111.part.js": "373f4da5dc828d85a49227d64e308e00",
"main.dart.js_112.part.js": "c14f432c92f9d6fc1d21fcabd74cf17f",
"main.dart.js_113.part.js": "9ed4e83fe48463e6faec9fa3e0e8959b",
"main.dart.js_13.part.js": "2c7a00ffdfa39cd646622e01713ad3a2",
"main.dart.js_18.part.js": "a00becfc01a96462db2081d71ddb867c",
"main.dart.js_19.part.js": "7921470b32867338a6d5456e7631fbf0",
"main.dart.js_20.part.js": "fffa1f5f2467490ea87d17aebc1e06c9",
"main.dart.js_24.part.js": "2a457bc78e7a4f2d501451df8c89a9b3",
"main.dart.js_25.part.js": "5dc9dc89de6d27b2bc9585a13e8cd05f",
"main.dart.js_29.part.js": "e5ba01277160afc8203cee295b17aefb",
"main.dart.js_30.part.js": "1d818632a32192282fcf2fd3be9a43a7",
"main.dart.js_33.part.js": "cd52c6eac11c28fe0e601a63c2a88d9d",
"main.dart.js_36.part.js": "aff482c1a6b0ab15961a606f6d675957",
"main.dart.js_37.part.js": "2bb647d5a567e963a23dd4501201b845",
"main.dart.js_39.part.js": "65ddae713f52e8a6f4b6348c13aa71de",
"main.dart.js_41.part.js": "4208b26ef9fe759a9cd6b4827a9087ef",
"main.dart.js_42.part.js": "05054f898e2e7286ace8afc28aac1188",
"main.dart.js_43.part.js": "7442ed1b335feea6ce70af898dcbb631",
"main.dart.js_44.part.js": "22514302ad34cb4fc2aa8c756c3e9362",
"main.dart.js_46.part.js": "536391050daedcce89ce1623efd9fe43",
"main.dart.js_47.part.js": "4cbd7c78bd05ab836cd2687a1aee55e1",
"main.dart.js_48.part.js": "7166554291d7d89c6cb431dff18dae5b",
"main.dart.js_49.part.js": "a16b9e867a8ef138d569468f50b56373",
"main.dart.js_5.part.js": "b70e30fdab0a6eda261f2ec6c60cf41a",
"main.dart.js_50.part.js": "c4f9f64c757605f867edf73163b8f13a",
"main.dart.js_51.part.js": "649b34de77717a35857ea0e2e5046e6b",
"main.dart.js_52.part.js": "57583aed42c488956c03e9ebb8f528d0",
"main.dart.js_54.part.js": "775ca559a3d5ec1c3120d1774a9e8859",
"main.dart.js_55.part.js": "a60cf9e58a6af02884162cf218e377e0",
"main.dart.js_56.part.js": "dd12687f75b54e21f873de344fff0575",
"main.dart.js_57.part.js": "ea11068490b5a84e618463c7811a54cd",
"main.dart.js_59.part.js": "d9511ebfde90ef1b3d6a62ddda367417",
"main.dart.js_6.part.js": "f4bf1b7fbe689bfa5a74b747649fcc95",
"main.dart.js_60.part.js": "b7b9fe28ce92bac851be2a42720ec487",
"main.dart.js_63.part.js": "264ae4fd2474c6074e5b8e77ba797b58",
"main.dart.js_65.part.js": "4c84f685ca249c9194621911cc3b30d0",
"main.dart.js_66.part.js": "0410b31cc3404ce6a01209cf24ebb0c1",
"main.dart.js_69.part.js": "8363edcf084798447035052a76ff1e9f",
"main.dart.js_7.part.js": "899c7062a6eb8ee913850462c513d3c0",
"main.dart.js_70.part.js": "92ef448f4cfb1d52a290b0490addd10d",
"main.dart.js_71.part.js": "eda41288a2f318038c62886465bf69de",
"main.dart.js_72.part.js": "2394d965ed99b372e6ccc773ecd2f499",
"main.dart.js_73.part.js": "d3d4ac2f54f9477f22053885487db22b",
"main.dart.js_74.part.js": "3de63528be0be7872b943a693e8a326c",
"main.dart.js_75.part.js": "1f03ecae2c16d55217bdc866377d43f7",
"main.dart.js_76.part.js": "c4d4f524625c5ebac98b1befcc0c0c8c",
"main.dart.js_77.part.js": "4128b4cff84bea25ae7863c0e72e46e3",
"main.dart.js_78.part.js": "9223ca11980b1ab4636669bf8cebcaf4",
"main.dart.js_79.part.js": "7b815648e8f8f5b75d980af83df24dee",
"main.dart.js_80.part.js": "14b2253a86bb6377295e53c0d10195ec",
"main.dart.js_81.part.js": "21f72ae01e8f05619ed5d5d751d08942",
"main.dart.js_82.part.js": "b541c5b729ba6122629c4dab139a1114",
"main.dart.js_84.part.js": "aa5ea9e0a8b5487508a4aa3a7de0dd94",
"main.dart.js_85.part.js": "777404b9cf261d10e1d0ce01aea21bbe",
"main.dart.js_86.part.js": "6585641b9ed2281f4c757155c730be45",
"main.dart.js_87.part.js": "70bc636915f218cebe004480691d3279",
"main.dart.js_88.part.js": "5997540e0b03e9fb81f9f574a1859794",
"main.dart.js_89.part.js": "eaca519b76a3c3796ddcf29bdcfd8736",
"main.dart.js_9.part.js": "9f65ebe2f58b839d5fffc4c6993a7efc",
"main.dart.js_90.part.js": "68b12c0f5c059ec699592415362525cd",
"main.dart.js_91.part.js": "e1e592d3d6042b5229573c34a5af41fc",
"main.dart.js_92.part.js": "790beee18d0673759ec9bf3b7b750a72",
"main.dart.js_93.part.js": "8eb36cab590f62c15c112c05014b9fad",
"main.dart.js_94.part.js": "5dd966f430907340c70b14eb92ca0176",
"main.dart.js_95.part.js": "b3247b7e8072e9e51d72c1bc6e243f94",
"main.dart.js_96.part.js": "a89eaebe837a89be7cb28a784477927b",
"main.dart.js_97.part.js": "55d16eafc0fa7e3d3c4e187703f4fea0",
"main.dart.js_98.part.js": "f0e2df3cfff7197eb9ddaf10357f8c74",
"main.dart.js_99.part.js": "ee814b505a8e8822094309a5e260ca7c",
"manifest.json": "675ba652801f9b6abbb7ea0170fb9e40",
"version.json": "17f52c31e7eff928adb249bc868dd921"};
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
