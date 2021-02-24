/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","360018d3dafe7fa4c5000f6738160fef"],["app/__init__.py","d41d8cd98f00b204e9800998ecf8427e"],["app/__pycache__/__init__.cpython-39.pyc","15ba6de5c83a9e29834892a728aafabe"],["app/__pycache__/main.cpython-39.pyc","7a4c99a0088b29dd29c8d36708d23e1f"],["app/library/__init__.py","d41d8cd98f00b204e9800998ecf8427e"],["app/library/__pycache__/__init__.cpython-39.pyc","f01f075ee6b3623101392f09fabd4962"],["app/library/__pycache__/helpers.cpython-39.pyc","e6452421e6aea6bc718e5e7c465dbade"],["app/library/helpers.py","066712d6c75061fefed887598edfb99f"],["app/main.py","1bd60793b045186269e472bfc6266e19"],["app/pages/about.md","db5388f224531511c6616425193e8391"],["app/pages/contact.md","6e1958c95c70f31302899938f4ea9dda"],["app/pages/home.md","25451035c709b34552eccbe99cc8b787"],["app/pages/info.md","b50240b694020b606c2085977e83e58a"],["app/pages/portfolio.md","0ebe64516558b29b0a6f10571ed436e4"],["app/routers/__init.py","d41d8cd98f00b204e9800998ecf8427e"],["app/routers/__pycache__/about.cpython-39.pyc","e3275018133165e89afab03dafafcaf1"],["app/routers/__pycache__/accordion.cpython-39.pyc","a1dbb08efc7a297f2b29722cad473134"],["app/routers/__pycache__/contact.cpython-39.pyc","be86d0f90a846630c270f73868bb745b"],["app/routers/__pycache__/portfolio.cpython-39.pyc","1a0ff4b75d678284b71994c5608a01de"],["app/routers/__pycache__/root.cpython-39.pyc","13604e13fcbaf2e4a2ecfacf83ef6201"],["app/routers/__pycache__/twoforms.cpython-39.pyc","c9bd1b89d0b926cb258227f203bf075c"],["app/routers/__pycache__/unsplash.cpython-39.pyc","7edeecafe72817788f4360933374efe2"],["app/routers/about.py","116ba49da02946c7db95c8e8582d6ded"],["app/routers/contact.py","caf0532607f722f8dc36d1b0a1ce4ebf"],["app/routers/portfolio.py","a8dd37541f039eab5249b5bd0f963812"],["app/routers/root.py","1ce7a38064e60f18d21140474bd6b81f"],["app/routers/twoforms.py","a0b15fe45a8781e1f9175fcda8dae951"],["app/routers/unsplash.py","493c4df2aa9cc6c93584a54e71aa8ca7"],["fastapi_cache/__init__.py","d41d8cd98f00b204e9800998ecf8427e"],["fastapi_cache/__pycache__/__init__.cpython-39.pyc","2b466e59d5d2b936a8837d9e5fcbf5c0"],["fastapi_cache/__pycache__/middleware.cpython-39.pyc","df52a47fb09a380007924bf9b219c144"],["fastapi_cache/__pycache__/types.cpython-39.pyc","cf65a83e1816f39a8a0d8b15f9a9f436"],["fastapi_cache/middleware.py","5360ce7f279a6c3d9d70c69807f47114"],["fastapi_cache/types.py","36924addd704cfaa3226323bc77b5284"],["images/image-1.png","19c55f16a09b94efb6f3f56955e77750"],["images/image-2.png","19305f37dc79299af2666ef2e93764be"],["images/image-3.png","1070df58f813aa7c00bee9822cbd0879"],["requirements.txt","37011f4b96eb88f181ea58758f5fee1b"],["runtime.txt","38f3d64227bc2c102070945115429b78"],["static/css/bootstrap.min.home.css","b9fc9e8bdb8030a380bc4baa835cf934"],["static/css/caorusel.css","ae7dce5b2daf18b7fb198409902f37c2"],["static/css/contact.css","05798fa5a173e9001c2a9378d7086c82"],["static/css/gallery.css","4b7d6550be779273f364d81dcdda55ab"],["static/css/mystyle.css","a9ab83885cabe31143b52f95a2b276a8"],["static/css/style3.css","ee2faf676dd9ccf3b8acace948cbc0b2"],["static/images/drawing.svg","48f590010020ea3ea6d4c43716162a11"],["static/images/icons/android-chrome-192x192.png","4730b2d4ca1546c8adb351a2f2d449b1"],["static/images/icons/android-chrome-256x256.png","6d39d7d857495d801c31606f4db07a26"],["static/images/icons/apple-touch-icon.png","af10e31240a852e57076f68037a3e901"],["static/images/icons/browserconfig.xml","a493ba0aa0b8ec8068d786d7248bb92c"],["static/images/icons/favicon-16x16.png","04019857ce06d6cd80c1035fbd22854c"],["static/images/icons/favicon-32x32.png","99d842bfa0f36c56b8dada3677f884d2"],["static/images/icons/favicon.ico","82531f4300e15ceb639ae4c2c726bb71"],["static/images/icons/img1.webp","c4d10822cc0afacdf2502983610ab9c3"],["static/images/icons/img2.webp","d7220ce63af4819ada6ffc722f539714"],["static/images/icons/mstile-150x150.png","f424e7144722bcbf9b89fadc5fb2c7c2"],["static/images/icons/safari-pinned-tab.svg","d56df5e991f4f0b93799f67ca72c80ba"],["static/images/icons/site.webmanifest","8066bfa4685b1136a6bdae277aafa8c8"],["static/images/img1.webp","c4d10822cc0afacdf2502983610ab9c3"],["static/images/img2.webp","d7220ce63af4819ada6ffc722f539714"],["static/images/img3.webp","e4dc1a4706fcf3495e77db50b1a33de5"],["static/images/logo.svg","d20707d6d3f26519528f1dff04a40d50"],["static/images/portfolio_1.webp","0f91a39af55aa9d57876db1509c00dcf"],["static/images/portfolio_2.webp","95180be7a2750469ebc3e7ad18226ac4"],["static/images/portfolio_3.webp","43522b93f1bf0da118d82b23c9d2cb2d"],["static/images/profile.png","55a31366f919a0ab595107822a921b0c"],["static/js/bootstrap.bundle.js","7ae7ffe2b0e2103e7f6363c867b62c5d"],["static/js/bootstrap.bundle.js.map","ffd7abc1f5b84b4f78f1c5516d79c20f"],["static/js/bootstrap.bundle.min.js","a3e0738ff4047e57357024e512a09014"],["static/js/bootstrap.bundle.min.js.map","b428a605e29abcff7ca03f0b99eb4af3"],["static/js/bootstrap.esm.js","9c82985f685c4855e44f67c3d4702249"],["static/js/bootstrap.esm.js.map","c2928acbf1b0b581c4060947a98b0f99"],["static/js/bootstrap.esm.min.js","16fe8217b6838f61e72bad2250f1dc82"],["static/js/bootstrap.esm.min.js.map","355da5d67492a1c03812ffa57756fb7c"],["static/js/bootstrap.js","fc19891f39c4d118b16d8f46d519c38a"],["static/js/bootstrap.js.map","56bbd72bd55e361b962f1fd793014ba8"],["static/js/bootstrap.min.js","86c66103329d2d376c5ec84117058497"],["static/js/bootstrap.min.js.map","c296a0e02e5285d90a54ae697bd4f0e5"],["static/js/forms.min.js","29e558c56f6552463b88a79bc0911d0e"],["static/js/freelancer.js","c39cf000ef6adba0f85349e55288c80d"],["static/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["static/js/script.js","f18465fb60d0534b6d5c97f3b452986b"],["static/js/sidebar.js","27843b1ea5e7a34ce4e0151bf40f8c0b"],["static/js/smart-forms.min.js","29e558c56f6552463b88a79bc0911d0e"],["static/manifest.json","4123658f38e09490f6a103a5973b4292"],["templates/about.html","d5180a4b13b6dbc622f2d5a59b2febe3"],["templates/base.html","3f960c3278c9293be0c9e6689f22c988"],["templates/contact.html","c654ebdf39a4396043fd452619b05768"],["templates/home.html","a1e616f6151eb819e3128e069dd63350"],["templates/include/sidebar.html","5911c0ed2d28586de7703e9d3bf11d37"],["templates/include/topnav.html","70ac30306f7a61426a74d0c957f79a89"],["templates/page.html","16cb6aaee84dfb280b188ea5379c4382"],["templates/portfolio.html","8a96d50458bfc10ec113d80aea180585"],["templates/portfolio_details.html","514c3a008502c47f4a0211c4cc0a487e"],["templates/twoforms.html","a96f1fb48fe157205472146fb075df82"],["templates/unsplash.html","f8a1aad2efc06e5940e12cf6f69cc34a"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







