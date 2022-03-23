// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _ripple = require("@material/ripple");
var _topAppBar = require("@material/top-app-bar");
var _drawer = require("@material/drawer");
var _list = require("@material/list");
var _textfield = require("@material/textfield");
// import {MDCDialog} from '@material/dialog';
// import {MDCChipSet} from '@material/chips';
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
    return new _ripple.MDCRipple(el);
});
const drawer = _drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
drawer.open = true;
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new _topAppBar.MDCTopAppBar(topAppBarElement);
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', ()=>{
    drawer.open = !drawer.open;
});
const list = new _list.MDCList(document.querySelector('.mdc-deprecated-list'));
list.wrapFocus = true;
const listItemRipples = list.listElements.map((listItemEl)=>new _ripple.MDCRipple(listItemEl)
);
const textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    return new _textfield.MDCTextField(el);
});
const screen = {
    small: 0,
    medium: 599,
    large: 1239
};
// observe window resize
window.addEventListener('resize', resizeHandler);
// initial call
resizeHandler();
// calculate size
function resizeHandler() {
    // get window width
    const iw = window.innerWidth;
    // determine named size
    let size = null;
    for(let s in screen)if (iw >= screen[s]) size = s;
    if (size == "small") drawer.open = false;
    else drawer.open = true;
}

},{"@material/ripple":"jRAE3","@material/top-app-bar":"gjVJK","@material/list":"lEf3g","@material/textfield":"iAIQW","@material/drawer":"fslB5"}],"jRAE3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "util", ()=>_util
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _util = require("./util");
var _adapter = require("./adapter");
parcelHelpers.exportAll(_adapter, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _foundation = require("./foundation");
parcelHelpers.exportAll(_foundation, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./util":"l3az5","./adapter":"9CpwK","./component":"035sE","./constants":"lg1jP","./foundation":"7frpT","./types":"xrl7V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3az5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsCssVariables", ()=>supportsCssVariables
);
parcelHelpers.export(exports, "getNormalizedEventCoords", ()=>getNormalizedEventCoords
);
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */ var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) forceRefresh = false;
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) return supportsCssVariables_;
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) return false;
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
    supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) supportsCssVariables_ = supportsCssVars;
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) return {
        x: 0,
        y: 0
    };
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    } else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return {
        x: normalizedX,
        y: normalizedY
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9CpwK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"035sE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCRipple", ()=>MDCRipple
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _events = require("@material/dom/events");
var _ponyfill = require("@material/dom/ponyfill");
var _foundation = require("./foundation");
var _util = require("./util");
var MDCRipple = function(_super) {
    _tslib.__extends(MDCRipple1, _super);
    function MDCRipple1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple1.attachTo = function(root, opts) {
        if (opts === void 0) opts = {
            isUnbounded: undefined
        };
        var ripple = new MDCRipple1(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) ripple.unbounded = opts.isUnbounded;
        return ripple;
    };
    MDCRipple1.createAdapter = function(instance) {
        return {
            addClass: function(className) {
                return instance.root.classList.add(className);
            },
            browserSupportsCssVars: function() {
                return _util.supportsCssVariables(window);
            },
            computeBoundingRect: function() {
                return instance.root.getBoundingClientRect();
            },
            containsEventTarget: function(target) {
                return instance.root.contains(target);
            },
            deregisterDocumentInteractionHandler: function(evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, _events.applyPassive());
            },
            deregisterInteractionHandler: function(evtType, handler) {
                return instance.root.removeEventListener(evtType, handler, _events.applyPassive());
            },
            deregisterResizeHandler: function(handler) {
                return window.removeEventListener('resize', handler);
            },
            getWindowPageOffset: function() {
                return {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                };
            },
            isSurfaceActive: function() {
                return _ponyfill.matches(instance.root, ':active');
            },
            isSurfaceDisabled: function() {
                return Boolean(instance.disabled);
            },
            isUnbounded: function() {
                return Boolean(instance.unbounded);
            },
            registerDocumentInteractionHandler: function(evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, _events.applyPassive());
            },
            registerInteractionHandler: function(evtType, handler) {
                return instance.root.addEventListener(evtType, handler, _events.applyPassive());
            },
            registerResizeHandler: function(handler) {
                return window.addEventListener('resize', handler);
            },
            removeClass: function(className) {
                return instance.root.classList.remove(className);
            },
            updateCssVariable: function(varName, value) {
                return instance.root.style.setProperty(varName, value);
            }
        };
    };
    Object.defineProperty(MDCRipple1.prototype, "unbounded", {
        get: function() {
            return Boolean(this.isUnbounded);
        },
        set: function(unbounded) {
            this.isUnbounded = Boolean(unbounded);
            this.setUnbounded();
        },
        enumerable: false,
        configurable: true
    });
    MDCRipple1.prototype.activate = function() {
        this.foundation.activate();
    };
    MDCRipple1.prototype.deactivate = function() {
        this.foundation.deactivate();
    };
    MDCRipple1.prototype.layout = function() {
        this.foundation.layout();
    };
    MDCRipple1.prototype.getDefaultFoundation = function() {
        return new _foundation.MDCRippleFoundation(MDCRipple1.createAdapter(this));
    };
    MDCRipple1.prototype.initialSyncWithDOM = function() {
        var root = this.root;
        this.isUnbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */ MDCRipple1.prototype.setUnbounded = function() {
        this.foundation.setUnbounded(Boolean(this.isUnbounded));
    };
    return MDCRipple1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/dom/events":"87xmx","@material/dom/ponyfill":"8pLcv","./foundation":"7frpT","./util":"l3az5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread
);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLptS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCComponent", ()=>MDCComponent
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("./foundation");
var MDCComponent = function() {
    function MDCComponent1(root, foundation) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        this.root = root;
        this.initialize.apply(this, _tslib.__spreadArray([], _tslib.__read(args)));
        // Note that we initialize foundation here and not within the constructor's
        // default param so that this.root is defined and can be used within the
        // foundation class.
        this.foundation = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation.init();
        this.initialSyncWithDOM();
    }
    MDCComponent1.attachTo = function(root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent1(root, new _foundation.MDCFoundation({
        }));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */ MDCComponent1.prototype.initialize = function() {
        var _args = [];
        for(var _i = 0; _i < arguments.length; _i++)_args[_i] = arguments[_i];
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent1.prototype.getDefaultFoundation = function() {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    };
    MDCComponent1.prototype.initialSyncWithDOM = function() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent1.prototype.destroy = function() {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation.destroy();
    };
    MDCComponent1.prototype.listen = function(evtType, handler, options) {
        this.root.addEventListener(evtType, handler, options);
    };
    MDCComponent1.prototype.unlisten = function(evtType, handler, options) {
        this.root.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */ MDCComponent1.prototype.emit = function(evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) shouldBubble = false;
        var evt;
        if (typeof CustomEvent === 'function') evt = new CustomEvent(evtType, {
            bubbles: shouldBubble,
            detail: evtData
        });
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root.dispatchEvent(evt);
    };
    return MDCComponent1;
}();
exports.default = MDCComponent;

},{"tslib":"lRdW5","./foundation":"kC5Yw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kC5Yw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCFoundation", ()=>MDCFoundation
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var MDCFoundation = function() {
    function MDCFoundation1(adapter) {
        if (adapter === void 0) adapter = {
        };
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation1, "cssClasses", {
        get: function() {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation1, "strings", {
        get: function() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation1, "numbers", {
        get: function() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation1, "defaultAdapter", {
        get: function() {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation1.prototype.init = function() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation1.prototype.destroy = function() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation1;
}();
exports.default = MDCFoundation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87xmx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ /**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */ parcelHelpers.export(exports, "applyPassive", ()=>applyPassive
);
function applyPassive(globalObj) {
    if (globalObj === void 0) globalObj = window;
    return supportsPassiveOption(globalObj) ? {
        passive: true
    } : false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) globalObj = window;
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function() {
        };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    } catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pLcv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ /**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */ parcelHelpers.export(exports, "closest", ()=>closest
);
parcelHelpers.export(exports, "matches", ()=>matches
);
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */ parcelHelpers.export(exports, "estimateScrollWidth", ()=>estimateScrollWidth
);
function closest(element, selector) {
    if (element.closest) return element.closest(selector);
    var el = element;
    while(el){
        if (matches(el, selector)) return el;
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) return htmlEl.scrollWidth;
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7frpT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCRippleFoundation", ()=>MDCRippleFoundation
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var _util = require("./util");
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart',
    'pointerdown',
    'mousedown',
    'keydown', 
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend',
    'pointerup',
    'mouseup',
    'contextmenu', 
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = function(_super) {
    _tslib.__extends(MDCRippleFoundation1, _super);
    function MDCRippleFoundation1(adapter) {
        var _this = _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCRippleFoundation1.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = '0';
        _this.frame = {
            width: 0,
            height: 0
        };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = {
            left: 0,
            top: 0
        };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function() {
            _this.activationAnimationHasEnded = true;
            _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function(e) {
            _this.activateImpl(e);
        };
        _this.deactivateHandler = function() {
            _this.deactivateImpl();
        };
        _this.focusHandler = function() {
            _this.handleFocus();
        };
        _this.blurHandler = function() {
            _this.handleBlur();
        };
        _this.resizeHandler = function() {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation1, "strings", {
        get: function() {
            return _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation1, "numbers", {
        get: function() {
            return _constants.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation1, "defaultAdapter", {
        get: function() {
            return {
                addClass: function() {
                    return undefined;
                },
                browserSupportsCssVars: function() {
                    return true;
                },
                computeBoundingRect: function() {
                    return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                },
                containsEventTarget: function() {
                    return true;
                },
                deregisterDocumentInteractionHandler: function() {
                    return undefined;
                },
                deregisterInteractionHandler: function() {
                    return undefined;
                },
                deregisterResizeHandler: function() {
                    return undefined;
                },
                getWindowPageOffset: function() {
                    return {
                        x: 0,
                        y: 0
                    };
                },
                isSurfaceActive: function() {
                    return true;
                },
                isSurfaceDisabled: function() {
                    return true;
                },
                isUnbounded: function() {
                    return true;
                },
                registerDocumentInteractionHandler: function() {
                    return undefined;
                },
                registerInteractionHandler: function() {
                    return undefined;
                },
                registerResizeHandler: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                updateCssVariable: function() {
                    return undefined;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation1.prototype.init = function() {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation1.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function() {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal();
                }
            });
        }
    };
    MDCRippleFoundation1.prototype.destroy = function() {
        var _this = this;
        if (this.supportsPressRipple()) {
            if (this.activationTimer) {
                clearTimeout(this.activationTimer);
                this.activationTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation1.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer) {
                clearTimeout(this.fgDeactivationRemovalTimer);
                this.fgDeactivationRemovalTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation1.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation1.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function() {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars();
            });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
    };
    /**
     * @param evt Optional event containing position information.
     */ MDCRippleFoundation1.prototype.activate = function(evt) {
        this.activateImpl(evt);
    };
    MDCRippleFoundation1.prototype.deactivate = function() {
        this.deactivateImpl();
    };
    MDCRippleFoundation1.prototype.layout = function() {
        var _this = this;
        if (this.layoutFrame) cancelAnimationFrame(this.layoutFrame);
        this.layoutFrame = requestAnimationFrame(function() {
            _this.layoutInternal();
            _this.layoutFrame = 0;
        });
    };
    MDCRippleFoundation1.prototype.setUnbounded = function(unbounded) {
        var UNBOUNDED = MDCRippleFoundation1.cssClasses.UNBOUNDED;
        if (unbounded) this.adapter.addClass(UNBOUNDED);
        else this.adapter.removeClass(UNBOUNDED);
    };
    MDCRippleFoundation1.prototype.handleFocus = function() {
        var _this = this;
        requestAnimationFrame(function() {
            return _this.adapter.addClass(MDCRippleFoundation1.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation1.prototype.handleBlur = function() {
        var _this = this;
        requestAnimationFrame(function() {
            return _this.adapter.removeClass(MDCRippleFoundation1.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */ MDCRippleFoundation1.prototype.supportsPressRipple = function() {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation1.prototype.defaultActivationState = function() {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */ MDCRippleFoundation1.prototype.registerRootHandlers = function(supportsPressRipple) {
        var e_1, _a;
        if (supportsPressRipple) {
            try {
                for(var ACTIVATION_EVENT_TYPES_1 = _tslib.__values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()){
                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            if (this.adapter.isUnbounded()) this.adapter.registerResizeHandler(this.resizeHandler);
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler);
        this.adapter.registerInteractionHandler('blur', this.blurHandler);
    };
    MDCRippleFoundation1.prototype.registerDeactivationHandlers = function(evt) {
        var e_2, _a;
        if (evt.type === 'keydown') this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
        else try {
            for(var POINTER_DEACTIVATION_EVENT_TYPES_1 = _tslib.__values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()){
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
    };
    MDCRippleFoundation1.prototype.deregisterRootHandlers = function() {
        var e_3, _a;
        try {
            for(var ACTIVATION_EVENT_TYPES_2 = _tslib.__values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()){
                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
        if (this.adapter.isUnbounded()) this.adapter.deregisterResizeHandler(this.resizeHandler);
    };
    MDCRippleFoundation1.prototype.deregisterDeactivationHandlers = function() {
        var e_4, _a;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
        try {
            for(var POINTER_DEACTIVATION_EVENT_TYPES_2 = _tslib.__values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()){
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
    };
    MDCRippleFoundation1.prototype.removeCssVars = function() {
        var _this = this;
        var rippleStrings = MDCRippleFoundation1.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function(key) {
            if (key.indexOf('VAR_') === 0) _this.adapter.updateCssVariable(rippleStrings[key], null);
        });
    };
    MDCRippleFoundation1.prototype.activateImpl = function(evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) return;
        var activationState = this.activationState;
        if (activationState.isActivated) return;
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) return;
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function(target) {
            return _this.adapter.containsEventTarget(target);
        });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) this.animateActivation();
        requestAnimationFrame(function() {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                if (activationState.wasElementMadeActive) _this.animateActivation();
            }
            if (!activationState.wasElementMadeActive) // Reset activation state immediately if element was not made active.
            _this.activationState = _this.defaultActivationState();
        });
    };
    MDCRippleFoundation1.prototype.checkElementMadeActive = function(evt) {
        return evt !== undefined && evt.type === 'keydown' ? this.adapter.isSurfaceActive() : true;
    };
    MDCRippleFoundation1.prototype.animateActivation = function() {
        var _this = this;
        var _a = MDCRippleFoundation1.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation1.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation1.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function() {
            _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation1.prototype.getFgTranslationCoordinates = function() {
        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) startPoint = _util.getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        else startPoint = {
            x: this.frame.width / 2,
            y: this.frame.height / 2
        };
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - this.initialSize / 2,
            y: startPoint.y - this.initialSize / 2
        };
        var endPoint = {
            x: this.frame.width / 2 - this.initialSize / 2,
            y: this.frame.height / 2 - this.initialSize / 2
        };
        return {
            startPoint: startPoint,
            endPoint: endPoint
        };
    };
    MDCRippleFoundation1.prototype.runDeactivationUXLogicIfReady = function() {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation1.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
            this.rmBoundedActivationClasses();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer = setTimeout(function() {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, _constants.numbers.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation1.prototype.rmBoundedActivationClasses = function() {
        var FG_ACTIVATION = MDCRippleFoundation1.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation1.prototype.resetActivationState = function() {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function() {
            return _this.previousActivationEvent = undefined;
        }, MDCRippleFoundation1.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation1.prototype.deactivateImpl = function() {
        var _this = this;
        var activationState = this.activationState;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) return;
        var state = _tslib.__assign({
        }, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function() {
                _this.animateDeactivation(state);
            });
            this.resetActivationState();
        } else {
            this.deregisterDeactivationHandlers();
            requestAnimationFrame(function() {
                _this.activationState.hasDeactivationUXRun = true;
                _this.animateDeactivation(state);
                _this.resetActivationState();
            });
        }
    };
    MDCRippleFoundation1.prototype.animateDeactivation = function(_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) this.runDeactivationUXLogicIfReady();
    };
    MDCRippleFoundation1.prototype.layoutInternal = function() {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function() {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
            return hypotenuse + MDCRippleFoundation1.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation1.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) this.initialSize = initialSize - 1;
        else this.initialSize = initialSize;
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
    };
    MDCRippleFoundation1.prototype.updateLayoutCssVars = function() {
        var _a = MDCRippleFoundation1.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords = {
                left: Math.round(this.frame.width / 2 - this.initialSize / 2),
                top: Math.round(this.frame.height / 2 - this.initialSize / 2)
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
    };
    return MDCRippleFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCRippleFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"lg1jP","./util":"l3az5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lg1jP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
parcelHelpers.export(exports, "strings", ()=>strings
);
parcelHelpers.export(exports, "numbers", ()=>numbers
);
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top'
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"xrl7V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gjVJK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _adapter = require("./adapter");
parcelHelpers.exportAll(_adapter, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _foundation = require("./foundation");
parcelHelpers.exportAll(_foundation, exports);
var _foundation1 = require("./fixed/foundation");
parcelHelpers.exportAll(_foundation1, exports);
var _foundation2 = require("./short/foundation");
parcelHelpers.exportAll(_foundation2, exports);
var _foundation3 = require("./standard/foundation");
parcelHelpers.exportAll(_foundation3, exports);

},{"./adapter":"3Ovfy","./component":"KwNqD","./constants":"52gAM","./foundation":"dHcUo","./fixed/foundation":"eeQCV","./short/foundation":"9lhAW","./standard/foundation":"6uP3L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Ovfy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"KwNqD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTopAppBar", ()=>MDCTopAppBar
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _component1 = require("@material/ripple/component");
var _constants = require("./constants");
var _foundation = require("./fixed/foundation");
var _foundation1 = require("./short/foundation");
var _foundation2 = require("./standard/foundation");
var MDCTopAppBar = function(_super) {
    _tslib.__extends(MDCTopAppBar1, _super);
    function MDCTopAppBar1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTopAppBar1.attachTo = function(root) {
        return new MDCTopAppBar1(root);
    };
    MDCTopAppBar1.prototype.initialize = function(rippleFactory) {
        if (rippleFactory === void 0) rippleFactory = function(el) {
            return _component1.MDCRipple.attachTo(el);
        };
        this.navIcon = this.root.querySelector(_constants.strings.NAVIGATION_ICON_SELECTOR);
        // Get all icons in the toolbar and instantiate the ripples
        var icons = [].slice.call(this.root.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR));
        if (this.navIcon) icons.push(this.navIcon);
        this.iconRipples = icons.map(function(icon) {
            var ripple = rippleFactory(icon);
            ripple.unbounded = true;
            return ripple;
        });
        this.scrollTarget = window;
    };
    MDCTopAppBar1.prototype.initialSyncWithDOM = function() {
        this.handleNavigationClick = this.foundation.handleNavigationClick.bind(this.foundation);
        this.handleWindowResize = this.foundation.handleWindowResize.bind(this.foundation);
        this.handleTargetScroll = this.foundation.handleTargetScroll.bind(this.foundation);
        this.scrollTarget.addEventListener('scroll', this.handleTargetScroll);
        if (this.navIcon) this.navIcon.addEventListener('click', this.handleNavigationClick);
        var isFixed = this.root.classList.contains(_constants.cssClasses.FIXED_CLASS);
        var isShort = this.root.classList.contains(_constants.cssClasses.SHORT_CLASS);
        if (!isShort && !isFixed) window.addEventListener('resize', this.handleWindowResize);
    };
    MDCTopAppBar1.prototype.destroy = function() {
        var e_1, _a;
        try {
            for(var _b = _tslib.__values(this.iconRipples), _c = _b.next(); !_c.done; _c = _b.next()){
                var iconRipple = _c.value;
                iconRipple.destroy();
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
        if (this.navIcon) this.navIcon.removeEventListener('click', this.handleNavigationClick);
        var isFixed = this.root.classList.contains(_constants.cssClasses.FIXED_CLASS);
        var isShort = this.root.classList.contains(_constants.cssClasses.SHORT_CLASS);
        if (!isShort && !isFixed) window.removeEventListener('resize', this.handleWindowResize);
        _super.prototype.destroy.call(this);
    };
    MDCTopAppBar1.prototype.setScrollTarget = function(target) {
        // Remove scroll handler from the previous scroll target
        this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
        this.scrollTarget = target;
        // Initialize scroll handler on the new scroll target
        this.handleTargetScroll = this.foundation.handleTargetScroll.bind(this.foundation);
        this.scrollTarget.addEventListener('scroll', this.handleTargetScroll);
    };
    MDCTopAppBar1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function(className) {
                return _this.root.classList.contains(className);
            },
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            setStyle: function(property, value) {
                return _this.root.style.setProperty(property, value);
            },
            getTopAppBarHeight: function() {
                return _this.root.clientHeight;
            },
            notifyNavigationIconClicked: function() {
                return _this.emit(_constants.strings.NAVIGATION_EVENT, {
                });
            },
            getViewportScrollY: function() {
                var win = _this.scrollTarget;
                var el = _this.scrollTarget;
                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: function() {
                return _this.root.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR).length;
            }
        };
        // tslint:enable:object-literal-sort-keys
        var foundation;
        if (this.root.classList.contains(_constants.cssClasses.SHORT_CLASS)) foundation = new _foundation1.MDCShortTopAppBarFoundation(adapter);
        else if (this.root.classList.contains(_constants.cssClasses.FIXED_CLASS)) foundation = new _foundation.MDCFixedTopAppBarFoundation(adapter);
        else foundation = new _foundation2.MDCTopAppBarFoundation(adapter);
        return foundation;
    };
    return MDCTopAppBar1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/ripple/component":"035sE","./constants":"52gAM","./fixed/foundation":"eeQCV","./short/foundation":"9lhAW","./standard/foundation":"6uP3L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"52gAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
parcelHelpers.export(exports, "numbers", ()=>numbers
);
parcelHelpers.export(exports, "strings", ()=>strings
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var cssClasses = {
    FIXED_CLASS: 'mdc-top-app-bar--fixed',
    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
    SHORT_CLASS: 'mdc-top-app-bar--short',
    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item'
};
var numbers = {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
    MAX_TOP_APP_BAR_HEIGHT: 128
};
var strings = {
    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
    NAVIGATION_EVENT: 'MDCTopAppBar:nav',
    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
    ROOT_SELECTOR: '.mdc-top-app-bar',
    TITLE_SELECTOR: '.mdc-top-app-bar__title'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeQCV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCFixedTopAppBarFoundation", ()=>MDCFixedTopAppBarFoundation
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _constants = require("../constants");
var _foundation = require("../standard/foundation");
var MDCFixedTopAppBarFoundation = function(_super) {
    _tslib.__extends(MDCFixedTopAppBarFoundation1, _super);
    function MDCFixedTopAppBarFoundation1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * State variable for the previous scroll iteration top app bar state
         */ _this.wasScrolled = false;
        return _this;
    }
    /**
     * Scroll handler for applying/removing the modifier class on the fixed top app bar.
     * @override
     */ MDCFixedTopAppBarFoundation1.prototype.handleTargetScroll = function() {
        var currentScroll = this.adapter.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.wasScrolled) {
                this.adapter.removeClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled = false;
            }
        } else if (!this.wasScrolled) {
            this.adapter.addClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
            this.wasScrolled = true;
        }
    };
    return MDCFixedTopAppBarFoundation1;
}(_foundation.MDCTopAppBarFoundation);
exports.default = MDCFixedTopAppBarFoundation;

},{"tslib":"lRdW5","../constants":"52gAM","../standard/foundation":"6uP3L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uP3L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTopAppBarFoundation", ()=>MDCTopAppBarFoundation
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _constants = require("../constants");
var _foundation = require("../foundation");
var INITIAL_VALUE = 0;
var MDCTopAppBarFoundation = function(_super) {
    _tslib.__extends(MDCTopAppBarFoundation1, _super);
    /* istanbul ignore next: optional argument is not a branch statement */ function MDCTopAppBarFoundation1(adapter) {
        var _this = _super.call(this, adapter) || this;
        /**
         * Indicates if the top app bar was docked in the previous scroll handler iteration.
         */ _this.wasDocked = true;
        /**
         * Indicates if the top app bar is docked in the fully shown position.
         */ _this.isDockedShowing = true;
        /**
         * Variable for current scroll position of the top app bar
         */ _this.currentAppBarOffsetTop = 0;
        /**
         * Used to prevent the top app bar from being scrolled out of view during resize events
         */ _this.isCurrentlyBeingResized = false;
        /**
         * The timeout that's used to throttle the resize events
         */ _this.resizeThrottleId = INITIAL_VALUE;
        /**
         * The timeout that's used to debounce toggling the isCurrentlyBeingResized
         * variable after a resize
         */ _this.resizeDebounceId = INITIAL_VALUE;
        _this.lastScrollPosition = _this.adapter.getViewportScrollY();
        _this.topAppBarHeight = _this.adapter.getTopAppBarHeight();
        return _this;
    }
    MDCTopAppBarFoundation1.prototype.destroy = function() {
        _super.prototype.destroy.call(this);
        this.adapter.setStyle('top', '');
    };
    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     * @override
     */ MDCTopAppBarFoundation1.prototype.handleTargetScroll = function() {
        var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
        var diff = currentScrollPosition - this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
        // If the window is being resized the lastScrollPosition needs to be updated
        // but the current scroll of the top app bar should stay in the same
        // position.
        if (!this.isCurrentlyBeingResized) {
            this.currentAppBarOffsetTop -= diff;
            if (this.currentAppBarOffsetTop > 0) this.currentAppBarOffsetTop = 0;
            else if (Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight) this.currentAppBarOffsetTop = -this.topAppBarHeight;
            this.moveTopAppBar();
        }
    };
    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     * @override
     */ MDCTopAppBarFoundation1.prototype.handleWindowResize = function() {
        var _this = this;
        // Throttle resize events 10 p/s
        if (!this.resizeThrottleId) this.resizeThrottleId = setTimeout(function() {
            _this.resizeThrottleId = INITIAL_VALUE;
            _this.throttledResizeHandler();
        }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        this.isCurrentlyBeingResized = true;
        if (this.resizeDebounceId) clearTimeout(this.resizeDebounceId);
        this.resizeDebounceId = setTimeout(function() {
            _this.handleTargetScroll();
            _this.isCurrentlyBeingResized = false;
            _this.resizeDebounceId = INITIAL_VALUE;
        }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    };
    /**
     * Function to determine if the DOM needs to update.
     */ MDCTopAppBarFoundation1.prototype.checkForUpdate = function() {
        var offscreenBoundaryTop = -this.topAppBarHeight;
        var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop < 0;
        var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop > offscreenBoundaryTop;
        var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
        // If it's partially showing, it can't be docked.
        if (partiallyShowing) this.wasDocked = false;
        else {
            // Not previously docked and not partially showing, it's now docked.
            if (!this.wasDocked) {
                this.wasDocked = true;
                return true;
            } else if (this.isDockedShowing !== hasAnyPixelsOnscreen) {
                this.isDockedShowing = hasAnyPixelsOnscreen;
                return true;
            }
        }
        return partiallyShowing;
    };
    /**
     * Function to move the top app bar if needed.
     */ MDCTopAppBarFoundation1.prototype.moveTopAppBar = function() {
        if (this.checkForUpdate()) {
            // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
            // so the top app bar doesn't show if the window resizes and the new height > the old height.
            var offset = this.currentAppBarOffsetTop;
            if (Math.abs(offset) >= this.topAppBarHeight) offset = -_constants.numbers.MAX_TOP_APP_BAR_HEIGHT;
            this.adapter.setStyle('top', offset + 'px');
        }
    };
    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     */ MDCTopAppBarFoundation1.prototype.throttledResizeHandler = function() {
        var currentHeight = this.adapter.getTopAppBarHeight();
        if (this.topAppBarHeight !== currentHeight) {
            this.wasDocked = false;
            // Since the top app bar has a different height depending on the screen width, this
            // will ensure that the top app bar remains in the correct location if
            // completely hidden and a resize makes the top app bar a different height.
            this.currentAppBarOffsetTop -= this.topAppBarHeight - currentHeight;
            this.topAppBarHeight = currentHeight;
        }
        this.handleTargetScroll();
    };
    return MDCTopAppBarFoundation1;
}(_foundation.MDCTopAppBarBaseFoundation);
exports.default = MDCTopAppBarFoundation;

},{"tslib":"lRdW5","../constants":"52gAM","../foundation":"dHcUo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHcUo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTopAppBarBaseFoundation", ()=>MDCTopAppBarBaseFoundation
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var MDCTopAppBarBaseFoundation = function(_super) {
    _tslib.__extends(MDCTopAppBarBaseFoundation1, _super);
    /* istanbul ignore next: optional argument is not a branch statement */ function MDCTopAppBarBaseFoundation1(adapter) {
        return _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCTopAppBarBaseFoundation1.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTopAppBarBaseFoundation1, "strings", {
        get: function() {
            return _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation1, "numbers", {
        get: function() {
            return _constants.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                hasClass: function() {
                    return false;
                },
                setStyle: function() {
                    return undefined;
                },
                getTopAppBarHeight: function() {
                    return 0;
                },
                notifyNavigationIconClicked: function() {
                    return undefined;
                },
                getViewportScrollY: function() {
                    return 0;
                },
                getTotalActionItems: function() {
                    return 0;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /** Other variants of TopAppBar foundation overrides this method */ MDCTopAppBarBaseFoundation1.prototype.handleTargetScroll = function() {
    }; // tslint:disable-line:no-empty
    /** Other variants of TopAppBar foundation overrides this method */ MDCTopAppBarBaseFoundation1.prototype.handleWindowResize = function() {
    }; // tslint:disable-line:no-empty
    MDCTopAppBarBaseFoundation1.prototype.handleNavigationClick = function() {
        this.adapter.notifyNavigationIconClicked();
    };
    return MDCTopAppBarBaseFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCTopAppBarBaseFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"52gAM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9lhAW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCShortTopAppBarFoundation", ()=>MDCShortTopAppBarFoundation
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _constants = require("../constants");
var _foundation = require("../foundation");
var MDCShortTopAppBarFoundation = function(_super) {
    _tslib.__extends(MDCShortTopAppBarFoundation1, _super);
    /* istanbul ignore next: optional argument is not a branch statement */ function MDCShortTopAppBarFoundation1(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.collapsed = false;
        _this.isAlwaysCollapsed = false;
        return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation1.prototype, "isCollapsed", {
        // Public visibility for backward compatibility.
        get: function() {
            return this.collapsed;
        },
        enumerable: false,
        configurable: true
    });
    MDCShortTopAppBarFoundation1.prototype.init = function() {
        _super.prototype.init.call(this);
        if (this.adapter.getTotalActionItems() > 0) this.adapter.addClass(_constants.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
        // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
        this.setAlwaysCollapsed(this.adapter.hasClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS));
    };
    /**
     * Set if the short top app bar should always be collapsed.
     *
     * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
     */ MDCShortTopAppBarFoundation1.prototype.setAlwaysCollapsed = function(value) {
        this.isAlwaysCollapsed = !!value;
        if (this.isAlwaysCollapsed) this.collapse();
        else // let maybeCollapseBar determine if the bar should be collapsed
        this.maybeCollapseBar();
    };
    MDCShortTopAppBarFoundation1.prototype.getAlwaysCollapsed = function() {
        return this.isAlwaysCollapsed;
    };
    /**
     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
     * @override
     */ MDCShortTopAppBarFoundation1.prototype.handleTargetScroll = function() {
        this.maybeCollapseBar();
    };
    MDCShortTopAppBarFoundation1.prototype.maybeCollapseBar = function() {
        if (this.isAlwaysCollapsed) return;
        var currentScroll = this.adapter.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.collapsed) this.uncollapse();
        } else if (!this.collapsed) this.collapse();
    };
    MDCShortTopAppBarFoundation1.prototype.uncollapse = function() {
        this.adapter.removeClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
        this.collapsed = false;
    };
    MDCShortTopAppBarFoundation1.prototype.collapse = function() {
        this.adapter.addClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
        this.collapsed = true;
    };
    return MDCShortTopAppBarFoundation1;
}(_foundation.MDCTopAppBarBaseFoundation);
exports.default = MDCShortTopAppBarFoundation;

},{"tslib":"lRdW5","../constants":"52gAM","../foundation":"dHcUo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEf3g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _adapter = require("./adapter");
parcelHelpers.exportAll(_adapter, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _foundation = require("./foundation");
parcelHelpers.exportAll(_foundation, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./adapter":"a7nzT","./component":"iRqEa","./constants":"5wBVC","./foundation":"dFgru","./types":"6F4EL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7nzT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iRqEa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCList", ()=>MDCList
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _ponyfill = require("@material/dom/ponyfill");
var _constants = require("./constants");
var _foundation = require("./foundation");
var MDCList = function(_super) {
    _tslib.__extends(MDCList1, _super);
    function MDCList1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCList1.prototype, "vertical", {
        set: function(value) {
            this.foundation.setVerticalOrientation(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList1.prototype, "listElements", {
        get: function() {
            return Array.from(this.root.querySelectorAll("." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS]));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList1.prototype, "wrapFocus", {
        set: function(value) {
            this.foundation.setWrapFocus(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList1.prototype, "typeaheadInProgress", {
        /**
         * @return Whether typeahead is currently matching a user-specified prefix.
         */ get: function() {
            return this.foundation.isTypeaheadInProgress();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList1.prototype, "hasTypeahead", {
        /**
         * Sets whether typeahead functionality is enabled on the list.
         * @param hasTypeahead Whether typeahead is enabled.
         */ set: function(hasTypeahead) {
            this.foundation.setHasTypeahead(hasTypeahead);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList1.prototype, "singleSelection", {
        set: function(isSingleSelectionList) {
            this.foundation.setSingleSelection(isSingleSelectionList);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList1.prototype, "selectedIndex", {
        get: function() {
            return this.foundation.getSelectedIndex();
        },
        set: function(index) {
            this.foundation.setSelectedIndex(index);
        },
        enumerable: false,
        configurable: true
    });
    MDCList1.attachTo = function(root) {
        return new MDCList1(root);
    };
    MDCList1.prototype.initialSyncWithDOM = function() {
        this.isEvolutionEnabled = _constants.evolutionAttribute in this.root.dataset;
        if (this.isEvolutionEnabled) this.classNameMap = _constants.evolutionClassNameMap;
        else if (_ponyfill.matches(this.root, _constants.strings.DEPRECATED_SELECTOR)) this.classNameMap = _constants.deprecatedClassNameMap;
        else this.classNameMap = Object.values(_constants.cssClasses).reduce(function(obj, className) {
            obj[className] = className;
            return obj;
        }, {
        });
        this.handleClick = this.handleClickEvent.bind(this);
        this.handleKeydown = this.handleKeydownEvent.bind(this);
        this.focusInEventListener = this.handleFocusInEvent.bind(this);
        this.focusOutEventListener = this.handleFocusOutEvent.bind(this);
        this.listen('keydown', this.handleKeydown);
        this.listen('click', this.handleClick);
        this.listen('focusin', this.focusInEventListener);
        this.listen('focusout', this.focusOutEventListener);
        this.layout();
        this.initializeListType();
        this.ensureFocusable();
    };
    MDCList1.prototype.destroy = function() {
        this.unlisten('keydown', this.handleKeydown);
        this.unlisten('click', this.handleClick);
        this.unlisten('focusin', this.focusInEventListener);
        this.unlisten('focusout', this.focusOutEventListener);
    };
    MDCList1.prototype.layout = function() {
        var direction = this.root.getAttribute(_constants.strings.ARIA_ORIENTATION);
        this.vertical = direction !== _constants.strings.ARIA_ORIENTATION_HORIZONTAL;
        var itemSelector = "." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS] + ":not([tabindex])";
        var childSelector = _constants.strings.FOCUSABLE_CHILD_ELEMENTS;
        // List items need to have at least tabindex=-1 to be focusable.
        var itemEls = this.root.querySelectorAll(itemSelector);
        if (itemEls.length) Array.prototype.forEach.call(itemEls, function(el) {
            el.setAttribute('tabindex', '-1');
        });
        // Child button/a elements are not tabbable until the list item is focused.
        var focusableChildEls = this.root.querySelectorAll(childSelector);
        if (focusableChildEls.length) Array.prototype.forEach.call(focusableChildEls, function(el) {
            el.setAttribute('tabindex', '-1');
        });
        if (this.isEvolutionEnabled) this.foundation.setUseSelectedAttribute(true);
        this.foundation.layout();
    };
    /**
     * Extracts the primary text from a list item.
     * @param item The list item element.
     * @return The primary text in the element.
     */ MDCList1.prototype.getPrimaryText = function(item) {
        var _a;
        var primaryText = item.querySelector("." + this.classNameMap[_constants.cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS]);
        if (this.isEvolutionEnabled || primaryText) return (_a = primaryText === null || primaryText === void 0 ? void 0 : primaryText.textContent) !== null && _a !== void 0 ? _a : '';
        var singleLineText = item.querySelector("." + this.classNameMap[_constants.cssClasses.LIST_ITEM_TEXT_CLASS]);
        return singleLineText && singleLineText.textContent || '';
    };
    /**
     * Initialize selectedIndex value based on pre-selected list items.
     */ MDCList1.prototype.initializeListType = function() {
        var _this = this;
        this.isInteractive = _ponyfill.matches(this.root, _constants.strings.ARIA_INTERACTIVE_ROLES_SELECTOR);
        if (this.isEvolutionEnabled && this.isInteractive) {
            var selection = Array.from(this.root.querySelectorAll(_constants.strings.SELECTED_ITEM_SELECTOR), function(listItem) {
                return _this.listElements.indexOf(listItem);
            });
            if (_ponyfill.matches(this.root, _constants.strings.ARIA_MULTI_SELECTABLE_SELECTOR)) this.selectedIndex = selection;
            else if (selection.length > 0) this.selectedIndex = selection[0];
            return;
        }
        var checkboxListItems = this.root.querySelectorAll(_constants.strings.ARIA_ROLE_CHECKBOX_SELECTOR);
        var radioSelectedListItem = this.root.querySelector(_constants.strings.ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root.querySelectorAll(_constants.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex = Array.from(preselectedItems, function(listItem) {
                return _this.listElements.indexOf(listItem);
            });
        } else if (radioSelectedListItem) this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    };
    /**
     * Updates the list item at itemIndex to the desired isEnabled state.
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */ MDCList1.prototype.setEnabled = function(itemIndex, isEnabled) {
        this.foundation.setEnabled(itemIndex, isEnabled);
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Defaults to
     *     the currently focused index.
     * @return The index of the matched item.
     */ MDCList1.prototype.typeaheadMatchItem = function(nextChar, startingIndex) {
        return this.foundation.typeaheadMatchItem(nextChar, startingIndex, /** skipFocus */ true);
    };
    MDCList1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassForElementIndex: function(index, className) {
                var element = _this.listElements[index];
                if (element) element.classList.add(_this.classNameMap[className]);
            },
            focusItemAtIndex: function(index) {
                var element = _this.listElements[index];
                if (element) element.focus();
            },
            getAttributeForElementIndex: function(index, attr) {
                return _this.listElements[index].getAttribute(attr);
            },
            getFocusedElementIndex: function() {
                return _this.listElements.indexOf(document.activeElement);
            },
            getListItemCount: function() {
                return _this.listElements.length;
            },
            getPrimaryTextAtIndex: function(index) {
                return _this.getPrimaryText(_this.listElements[index]);
            },
            hasCheckboxAtIndex: function(index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(_constants.strings.CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function(index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(_constants.strings.RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function(index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(_constants.strings.CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function() {
                return _this.root !== document.activeElement && _this.root.contains(document.activeElement);
            },
            isRootFocused: function() {
                return document.activeElement === _this.root;
            },
            listItemAtIndexHasClass: function(index, className) {
                return _this.listElements[index].classList.contains(_this.classNameMap[className]);
            },
            notifyAction: function(index) {
                _this.emit(_constants.strings.ACTION_EVENT, {
                    index: index
                }, /** shouldBubble */ true);
            },
            removeClassForElementIndex: function(index, className) {
                var element = _this.listElements[index];
                if (element) element.classList.remove(_this.classNameMap[className]);
            },
            setAttributeForElementIndex: function(index, attr, value) {
                var element = _this.listElements[index];
                if (element) element.setAttribute(attr, value);
            },
            setCheckedCheckboxOrRadioAtIndex: function(index, isChecked) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(_constants.strings.CHECKBOX_RADIO_SELECTOR);
                toggleEl.checked = isChecked;
                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function(listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var selector = _constants.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
                Array.prototype.forEach.call(element.querySelectorAll(selector), function(el) {
                    el.setAttribute('tabindex', tabIndexValue);
                });
            }
        };
        return new _foundation.MDCListFoundation(adapter);
    };
    /**
     * Ensures that at least one item is focusable if the list is interactive and
     * doesn't specify a suitable tabindex.
     */ MDCList1.prototype.ensureFocusable = function() {
        if (this.isEvolutionEnabled && this.isInteractive) {
            if (!this.root.querySelector("." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS] + "[tabindex=\"0\"]")) {
                var index = this.initialFocusIndex();
                if (index !== -1) this.listElements[index].tabIndex = 0;
            }
        }
    };
    MDCList1.prototype.initialFocusIndex = function() {
        if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0) return this.selectedIndex[0];
        if (typeof this.selectedIndex === 'number' && this.selectedIndex !== _constants.numbers.UNSET_INDEX) return this.selectedIndex;
        var el = this.root.querySelector("." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS] + ":not(." + this.classNameMap[_constants.cssClasses.LIST_ITEM_DISABLED_CLASS] + ")");
        if (el === null) return -1;
        return this.getListItemIndex(el);
    };
    /**
     * Used to figure out which list item this event is targetting. Or returns -1
     * if there is no list item
     */ MDCList1.prototype.getListItemIndex = function(el) {
        var nearestParent = _ponyfill.closest(el, "." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS] + ", ." + this.classNameMap[_constants.cssClasses.ROOT]);
        // Get the index of the element if it is a list item.
        if (nearestParent && _ponyfill.matches(nearestParent, "." + this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS])) return this.listElements.indexOf(nearestParent);
        return -1;
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */ MDCList1.prototype.handleFocusInEvent = function(evt) {
        var index = this.getListItemIndex(evt.target);
        this.foundation.handleFocusIn(index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */ MDCList1.prototype.handleFocusOutEvent = function(evt) {
        var index = this.getListItemIndex(evt.target);
        this.foundation.handleFocusOut(index);
    };
    /**
     * Used to figure out which element was focused when keydown event occurred
     * before sending the event to the foundation.
     */ MDCList1.prototype.handleKeydownEvent = function(evt) {
        var index = this.getListItemIndex(evt.target);
        var target = evt.target;
        this.foundation.handleKeydown(evt, target.classList.contains(this.classNameMap[_constants.cssClasses.LIST_ITEM_CLASS]), index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */ MDCList1.prototype.handleClickEvent = function(evt) {
        var index = this.getListItemIndex(evt.target);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the
        // checkbox will have 2 change events.
        var toggleCheckbox = !_ponyfill.matches(target, _constants.strings.CHECKBOX_RADIO_SELECTOR);
        this.foundation.handleClick(index, toggleCheckbox);
    };
    return MDCList1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/dom/ponyfill":"8pLcv","./constants":"5wBVC","./foundation":"dFgru","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wBVC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "strings", ()=>strings
);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
parcelHelpers.export(exports, "numbers", ()=>numbers
);
parcelHelpers.export(exports, "deprecatedClassNameMap", ()=>deprecatedClassNameMap
);
parcelHelpers.export(exports, "evolutionAttribute", ()=>evolutionAttribute
);
parcelHelpers.export(exports, "evolutionClassNameMap", ()=>evolutionClassNameMap
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _a, _b;
var cssClasses = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
    LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
    ROOT: 'mdc-list'
};
var evolutionClassNameMap = (_a = {
}, _a["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated', _a["" + cssClasses.LIST_ITEM_CLASS] = 'mdc-list-item', _a["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled', _a["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected', _a["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text', _a["" + cssClasses.ROOT] = 'mdc-list', _a);
var deprecatedClassNameMap = (_b = {
}, _b["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated', _b["" + cssClasses.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item', _b["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled', _b["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected', _b["" + cssClasses.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text', _b["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text', _b["" + cssClasses.ROOT] = 'mdc-deprecated-list', _b);
var strings = {
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: '.mdc-deprecated-list',
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
var numbers = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
var evolutionAttribute = 'evolution';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFgru":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCListFoundation", ()=>MDCListFoundation
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _keyboard = require("@material/dom/keyboard");
var _constants = require("./constants");
var _events = require("./events");
var _typeahead = require("./typeahead");
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
var MDCListFoundation = function(_super) {
    _tslib.__extends(MDCListFoundation1, _super);
    function MDCListFoundation1(adapter) {
        var _this = _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCListFoundation1.defaultAdapter), adapter)) || this;
        _this.wrapFocus = false;
        _this.isVertical = true;
        _this.isSingleSelectionList = false;
        _this.selectedIndex = _constants.numbers.UNSET_INDEX;
        _this.focusedItemIndex = _constants.numbers.UNSET_INDEX;
        _this.useActivatedClass = false;
        _this.useSelectedAttr = false;
        _this.ariaCurrentAttrValue = null;
        _this.isCheckboxList = false;
        _this.isRadioList = false;
        _this.hasTypeahead = false;
        // Transiently holds current typeahead prefix from user.
        _this.typeaheadState = _typeahead.initState();
        _this.sortedIndexByFirstChar = new Map();
        return _this;
    }
    Object.defineProperty(MDCListFoundation1, "strings", {
        get: function() {
            return _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation1, "numbers", {
        get: function() {
            return _constants.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation1, "defaultAdapter", {
        get: function() {
            return {
                addClassForElementIndex: function() {
                    return undefined;
                },
                focusItemAtIndex: function() {
                    return undefined;
                },
                getAttributeForElementIndex: function() {
                    return null;
                },
                getFocusedElementIndex: function() {
                    return 0;
                },
                getListItemCount: function() {
                    return 0;
                },
                hasCheckboxAtIndex: function() {
                    return false;
                },
                hasRadioAtIndex: function() {
                    return false;
                },
                isCheckboxCheckedAtIndex: function() {
                    return false;
                },
                isFocusInsideList: function() {
                    return false;
                },
                isRootFocused: function() {
                    return false;
                },
                listItemAtIndexHasClass: function() {
                    return false;
                },
                notifyAction: function() {
                    return undefined;
                },
                removeClassForElementIndex: function() {
                    return undefined;
                },
                setAttributeForElementIndex: function() {
                    return undefined;
                },
                setCheckedCheckboxOrRadioAtIndex: function() {
                    return undefined;
                },
                setTabIndexForListItemChildren: function() {
                    return undefined;
                },
                getPrimaryTextAtIndex: function() {
                    return '';
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCListFoundation1.prototype.layout = function() {
        if (this.adapter.getListItemCount() === 0) return;
        // TODO(b/172274142): consider all items when determining the list's type.
        if (this.adapter.hasCheckboxAtIndex(0)) this.isCheckboxList = true;
        else if (this.adapter.hasRadioAtIndex(0)) this.isRadioList = true;
        else this.maybeInitializeSingleSelection();
        if (this.hasTypeahead) this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    };
    /** Returns the index of the item that was last focused. */ MDCListFoundation1.prototype.getFocusedItemIndex = function() {
        return this.focusedItemIndex;
    };
    /** Toggles focus wrapping with keyboard navigation. */ MDCListFoundation1.prototype.setWrapFocus = function(value) {
        this.wrapFocus = value;
    };
    /**
     * Toggles orientation direction for keyboard navigation (true for vertical,
     * false for horizontal).
     */ MDCListFoundation1.prototype.setVerticalOrientation = function(value) {
        this.isVertical = value;
    };
    /** Toggles single-selection behavior. */ MDCListFoundation1.prototype.setSingleSelection = function(value) {
        this.isSingleSelectionList = value;
        if (value) {
            this.maybeInitializeSingleSelection();
            this.selectedIndex = this.getSelectedIndexFromDOM();
        }
    };
    /**
     * Automatically determines whether the list is single selection list. If so,
     * initializes the internal state to match the selected item.
     */ MDCListFoundation1.prototype.maybeInitializeSingleSelection = function() {
        var selectedItemIndex = this.getSelectedIndexFromDOM();
        if (selectedItemIndex === _constants.numbers.UNSET_INDEX) return;
        var hasActivatedClass = this.adapter.listItemAtIndexHasClass(selectedItemIndex, _constants.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
        if (hasActivatedClass) this.setUseActivatedClass(true);
        this.isSingleSelectionList = true;
        this.selectedIndex = selectedItemIndex;
    };
    /** @return Index of the first selected item based on the DOM state. */ MDCListFoundation1.prototype.getSelectedIndexFromDOM = function() {
        var selectedIndex = _constants.numbers.UNSET_INDEX;
        var listItemsCount = this.adapter.getListItemCount();
        for(var i = 0; i < listItemsCount; i++){
            var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, _constants.cssClasses.LIST_ITEM_SELECTED_CLASS);
            var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, _constants.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
            if (!(hasSelectedClass || hasActivatedClass)) continue;
            selectedIndex = i;
            break;
        }
        return selectedIndex;
    };
    /**
     * Sets whether typeahead is enabled on the list.
     * @param hasTypeahead Whether typeahead is enabled.
     */ MDCListFoundation1.prototype.setHasTypeahead = function(hasTypeahead) {
        this.hasTypeahead = hasTypeahead;
        if (hasTypeahead) this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    };
    /**
     * @return Whether typeahead is currently matching a user-specified prefix.
     */ MDCListFoundation1.prototype.isTypeaheadInProgress = function() {
        return this.hasTypeahead && _typeahead.isTypingInProgress(this.typeaheadState);
    };
    /** Toggle use of the "activated" CSS class. */ MDCListFoundation1.prototype.setUseActivatedClass = function(useActivated) {
        this.useActivatedClass = useActivated;
    };
    /**
     * Toggles use of the selected attribute (true for aria-selected, false for
     * aria-checked).
     */ MDCListFoundation1.prototype.setUseSelectedAttribute = function(useSelected) {
        this.useSelectedAttr = useSelected;
    };
    MDCListFoundation1.prototype.getSelectedIndex = function() {
        return this.selectedIndex;
    };
    MDCListFoundation1.prototype.setSelectedIndex = function(index, _a) {
        var _b = _a === void 0 ? {
        } : _a, forceUpdate = _b.forceUpdate;
        if (!this.isIndexValid(index)) return;
        if (this.isCheckboxList) this.setCheckboxAtIndex(index);
        else if (this.isRadioList) this.setRadioAtIndex(index);
        else this.setSingleSelectionAtIndex(index, {
            forceUpdate: forceUpdate
        });
    };
    /**
     * Focus in handler for the list items.
     */ MDCListFoundation1.prototype.handleFocusIn = function(listItemIndex) {
        if (listItemIndex >= 0) {
            this.focusedItemIndex = listItemIndex;
            this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '0');
            this.adapter.setTabIndexForListItemChildren(listItemIndex, '0');
        }
    };
    /**
     * Focus out handler for the list items.
     */ MDCListFoundation1.prototype.handleFocusOut = function(listItemIndex) {
        var _this = this;
        if (listItemIndex >= 0) {
            this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '-1');
            this.adapter.setTabIndexForListItemChildren(listItemIndex, '-1');
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any
         * element. Setting a delay to wait till the focus is moved to next element.
         */ setTimeout(function() {
            if (!_this.adapter.isFocusInsideList()) _this.setTabindexToFirstSelectedOrFocusedItem();
        }, 0);
    };
    /**
     * Key handler for the list.
     */ MDCListFoundation1.prototype.handleKeydown = function(event, isRootListItem, listItemIndex) {
        var _this = this;
        var isArrowLeft = _keyboard.normalizeKey(event) === 'ArrowLeft';
        var isArrowUp = _keyboard.normalizeKey(event) === 'ArrowUp';
        var isArrowRight = _keyboard.normalizeKey(event) === 'ArrowRight';
        var isArrowDown = _keyboard.normalizeKey(event) === 'ArrowDown';
        var isHome = _keyboard.normalizeKey(event) === 'Home';
        var isEnd = _keyboard.normalizeKey(event) === 'End';
        var isEnter = _keyboard.normalizeKey(event) === 'Enter';
        var isSpace = _keyboard.normalizeKey(event) === 'Spacebar';
        // Have to check both upper and lower case, because having caps lock on
        // affects the value.
        var isLetterA = event.key === 'A' || event.key === 'a';
        if (this.adapter.isRootFocused()) {
            if (isArrowUp || isEnd) {
                event.preventDefault();
                this.focusLastElement();
            } else if (isArrowDown || isHome) {
                event.preventDefault();
                this.focusFirstElement();
            }
            if (this.hasTypeahead) {
                var handleKeydownOpts = {
                    event: event,
                    focusItemAtIndex: function(index) {
                        _this.focusItemAtIndex(index);
                    },
                    focusedItemIndex: -1,
                    isTargetListItem: isRootListItem,
                    sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                    isItemAtIndexDisabled: function(index) {
                        return _this.adapter.listItemAtIndexHasClass(index, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
                    }
                };
                _typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
            }
            return;
        }
        var currentIndex = this.adapter.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) // If this event doesn't have a mdc-list-item ancestor from the
            // current list (not from a sublist), return early.
            return;
        }
        if (this.isVertical && isArrowDown || !this.isVertical && isArrowRight) {
            _events.preventDefaultEvent(event);
            this.focusNextElement(currentIndex);
        } else if (this.isVertical && isArrowUp || !this.isVertical && isArrowLeft) {
            _events.preventDefaultEvent(event);
            this.focusPrevElement(currentIndex);
        } else if (isHome) {
            _events.preventDefaultEvent(event);
            this.focusFirstElement();
        } else if (isEnd) {
            _events.preventDefaultEvent(event);
            this.focusLastElement();
        } else if (isLetterA && event.ctrlKey && this.isCheckboxList) {
            event.preventDefault();
            this.toggleAll(this.selectedIndex === _constants.numbers.UNSET_INDEX ? [] : this.selectedIndex);
        } else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers
                // synthetic MouseEvent event.
                var target = event.target;
                if (target && target.tagName === 'A' && isEnter) return;
                _events.preventDefaultEvent(event);
                if (this.adapter.listItemAtIndexHasClass(currentIndex, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS)) return;
                if (!this.isTypeaheadInProgress()) {
                    if (this.isSelectableList()) this.setSelectedIndexOnAction(currentIndex);
                    this.adapter.notifyAction(currentIndex);
                }
            }
        }
        if (this.hasTypeahead) {
            var handleKeydownOpts = {
                event: event,
                focusItemAtIndex: function(index) {
                    _this.focusItemAtIndex(index);
                },
                focusedItemIndex: this.focusedItemIndex,
                isTargetListItem: isRootListItem,
                sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                isItemAtIndexDisabled: function(index) {
                    return _this.adapter.listItemAtIndexHasClass(index, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
                }
            };
            _typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
        }
    };
    /**
     * Click handler for the list.
     */ MDCListFoundation1.prototype.handleClick = function(index, toggleCheckbox) {
        if (index === _constants.numbers.UNSET_INDEX) return;
        if (this.adapter.listItemAtIndexHasClass(index, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS)) return;
        if (this.isSelectableList()) this.setSelectedIndexOnAction(index, toggleCheckbox);
        this.adapter.notifyAction(index);
    };
    /**
     * Focuses the next element on the list.
     */ MDCListFoundation1.prototype.focusNextElement = function(index) {
        var count = this.adapter.getListItemCount();
        var nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus) nextIndex = 0;
            else // Return early because last item is already focused.
            return index;
        }
        this.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */ MDCListFoundation1.prototype.focusPrevElement = function(index) {
        var prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus) prevIndex = this.adapter.getListItemCount() - 1;
            else // Return early because first item is already focused.
            return index;
        }
        this.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation1.prototype.focusFirstElement = function() {
        this.focusItemAtIndex(0);
        return 0;
    };
    MDCListFoundation1.prototype.focusLastElement = function() {
        var lastIndex = this.adapter.getListItemCount() - 1;
        this.focusItemAtIndex(lastIndex);
        return lastIndex;
    };
    MDCListFoundation1.prototype.focusInitialElement = function() {
        var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
        this.focusItemAtIndex(initialIndex);
        return initialIndex;
    };
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */ MDCListFoundation1.prototype.setEnabled = function(itemIndex, isEnabled) {
        if (!this.isIndexValid(itemIndex)) return;
        if (isEnabled) {
            this.adapter.removeClassForElementIndex(itemIndex, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
            this.adapter.setAttributeForElementIndex(itemIndex, _constants.strings.ARIA_DISABLED, 'false');
        } else {
            this.adapter.addClassForElementIndex(itemIndex, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
            this.adapter.setAttributeForElementIndex(itemIndex, _constants.strings.ARIA_DISABLED, 'true');
        }
    };
    MDCListFoundation1.prototype.setSingleSelectionAtIndex = function(index, _a) {
        var _b = _a === void 0 ? {
        } : _a, forceUpdate = _b.forceUpdate;
        if (this.selectedIndex === index && !forceUpdate) return;
        var selectedClassName = _constants.cssClasses.LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass) selectedClassName = _constants.cssClasses.LIST_ITEM_ACTIVATED_CLASS;
        if (this.selectedIndex !== _constants.numbers.UNSET_INDEX) this.adapter.removeClassForElementIndex(this.selectedIndex, selectedClassName);
        this.setAriaForSingleSelectionAtIndex(index);
        this.setTabindexAtIndex(index);
        if (index !== _constants.numbers.UNSET_INDEX) this.adapter.addClassForElementIndex(index, selectedClassName);
        this.selectedIndex = index;
    };
    /**
     * Sets aria attribute for single selection at given index.
     */ MDCListFoundation1.prototype.setAriaForSingleSelectionAtIndex = function(index) {
        // Detect the presence of aria-current and get the value only during list
        // initialization when it is in unset state.
        if (this.selectedIndex === _constants.numbers.UNSET_INDEX) this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(index, _constants.strings.ARIA_CURRENT);
        var isAriaCurrent = this.ariaCurrentAttrValue !== null;
        var ariaAttribute = isAriaCurrent ? _constants.strings.ARIA_CURRENT : _constants.strings.ARIA_SELECTED;
        if (this.selectedIndex !== _constants.numbers.UNSET_INDEX) this.adapter.setAttributeForElementIndex(this.selectedIndex, ariaAttribute, 'false');
        if (index !== _constants.numbers.UNSET_INDEX) {
            var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue : 'true';
            this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
        }
    };
    /**
     * Returns the attribute to use for indicating selection status.
     */ MDCListFoundation1.prototype.getSelectionAttribute = function() {
        return this.useSelectedAttr ? _constants.strings.ARIA_SELECTED : _constants.strings.ARIA_CHECKED;
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it
     * is already checked.
     */ MDCListFoundation1.prototype.setRadioAtIndex = function(index) {
        var selectionAttribute = this.getSelectionAttribute();
        this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex !== _constants.numbers.UNSET_INDEX) this.adapter.setAttributeForElementIndex(this.selectedIndex, selectionAttribute, 'false');
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, 'true');
        this.selectedIndex = index;
    };
    MDCListFoundation1.prototype.setCheckboxAtIndex = function(index) {
        var selectionAttribute = this.getSelectionAttribute();
        for(var i = 0; i < this.adapter.getListItemCount(); i++){
            var isChecked = false;
            if (index.indexOf(i) >= 0) isChecked = true;
            this.adapter.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
            this.adapter.setAttributeForElementIndex(i, selectionAttribute, isChecked ? 'true' : 'false');
        }
        this.selectedIndex = index;
    };
    MDCListFoundation1.prototype.setTabindexAtIndex = function(index) {
        if (this.focusedItemIndex === _constants.numbers.UNSET_INDEX && index !== 0) // If some list item was selected set first list item's tabindex to -1.
        // Generally, tabindex is set to 0 on first list item of list that has no
        // preselected items.
        this.adapter.setAttributeForElementIndex(0, 'tabindex', '-1');
        else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) this.adapter.setAttributeForElementIndex(this.focusedItemIndex, 'tabindex', '-1');
        // Set the previous selection's tabindex to -1. We need this because
        // in selection menus that are not visible, programmatically setting an
        // option will not change focus but will change where tabindex should be 0.
        if (!(this.selectedIndex instanceof Array) && this.selectedIndex !== index) this.adapter.setAttributeForElementIndex(this.selectedIndex, 'tabindex', '-1');
        if (index !== _constants.numbers.UNSET_INDEX) this.adapter.setAttributeForElementIndex(index, 'tabindex', '0');
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio
     *     list.
     */ MDCListFoundation1.prototype.isSelectableList = function() {
        return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    };
    MDCListFoundation1.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
        var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
        this.setTabindexAtIndex(targetIndex);
    };
    MDCListFoundation1.prototype.getFirstSelectedOrFocusedItemIndex = function() {
        // Action lists retain focus on the most recently focused item.
        if (!this.isSelectableList()) return Math.max(this.focusedItemIndex, 0);
        // Single-selection lists focus the selected item.
        if (typeof this.selectedIndex === 'number' && this.selectedIndex !== _constants.numbers.UNSET_INDEX) return this.selectedIndex;
        // Multiple-selection lists focus the first selected item.
        if (isNumberArray(this.selectedIndex) && this.selectedIndex.length > 0) return this.selectedIndex.reduce(function(minIndex, currentIndex) {
            return Math.min(minIndex, currentIndex);
        });
        // Selection lists without a selection focus the first item.
        return 0;
    };
    MDCListFoundation1.prototype.isIndexValid = function(index) {
        var _this = this;
        if (index instanceof Array) {
            if (!this.isCheckboxList) throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            if (index.length === 0) return true;
            else return index.some(function(i) {
                return _this.isIndexInRange(i);
            });
        } else if (typeof index === 'number') {
            if (this.isCheckboxList) throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
            return this.isIndexInRange(index) || this.isSingleSelectionList && index === _constants.numbers.UNSET_INDEX;
        } else return false;
    };
    MDCListFoundation1.prototype.isIndexInRange = function(index) {
        var listSize = this.adapter.getListItemCount();
        return index >= 0 && index < listSize;
    };
    /**
     * Sets selected index on user action, toggles checkbox / radio based on
     * toggleCheckbox value. User interaction should not toggle list item(s) when
     * disabled.
     */ MDCListFoundation1.prototype.setSelectedIndexOnAction = function(index, toggleCheckbox) {
        if (toggleCheckbox === void 0) toggleCheckbox = true;
        if (this.isCheckboxList) this.toggleCheckboxAtIndex(index, toggleCheckbox);
        else this.setSelectedIndex(index);
    };
    MDCListFoundation1.prototype.toggleCheckboxAtIndex = function(index, toggleCheckbox) {
        var selectionAttribute = this.getSelectionAttribute();
        var isChecked = this.adapter.isCheckboxCheckedAtIndex(index);
        if (toggleCheckbox) {
            isChecked = !isChecked;
            this.adapter.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
        }
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, isChecked ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not
        // initialized then provide a default value.
        var selectedIndexes = this.selectedIndex === _constants.numbers.UNSET_INDEX ? [] : this.selectedIndex.slice();
        if (isChecked) selectedIndexes.push(index);
        else selectedIndexes = selectedIndexes.filter(function(i) {
            return i !== index;
        });
        this.selectedIndex = selectedIndexes;
    };
    MDCListFoundation1.prototype.focusItemAtIndex = function(index) {
        this.adapter.focusItemAtIndex(index);
        this.focusedItemIndex = index;
    };
    MDCListFoundation1.prototype.toggleAll = function(currentlySelectedIndexes) {
        var count = this.adapter.getListItemCount();
        // If all items are selected, deselect everything.
        if (currentlySelectedIndexes.length === count) this.setCheckboxAtIndex([]);
        else {
            // Otherwise select all enabled options.
            var allIndexes = [];
            for(var i = 0; i < count; i++)if (!this.adapter.listItemAtIndexHasClass(i, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS) || currentlySelectedIndexes.indexOf(i) > -1) allIndexes.push(i);
            this.setCheckboxAtIndex(allIndexes);
        }
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Only relevant
     *     when starting a new match sequence. To start a new match sequence,
     *     clear the buffer using `clearTypeaheadBuffer`, or wait for the buffer
     *     to clear after a set interval defined in list foundation. Defaults to
     *     the currently focused index.
     * @return The index of the matched item, or -1 if no match.
     */ MDCListFoundation1.prototype.typeaheadMatchItem = function(nextChar, startingIndex, skipFocus) {
        var _this = this;
        if (skipFocus === void 0) skipFocus = false;
        var opts = {
            focusItemAtIndex: function(index) {
                _this.focusItemAtIndex(index);
            },
            focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
            nextChar: nextChar,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            skipFocus: skipFocus,
            isItemAtIndexDisabled: function(index) {
                return _this.adapter.listItemAtIndexHasClass(index, _constants.cssClasses.LIST_ITEM_DISABLED_CLASS);
            }
        };
        return _typeahead.matchItem(opts, this.typeaheadState);
    };
    /**
     * Initializes the MDCListTextAndIndex data structure by indexing the current
     * list items by primary text.
     *
     * @return The primary texts of all the list items sorted by first character.
     */ MDCListFoundation1.prototype.typeaheadInitSortedIndex = function() {
        return _typeahead.initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    };
    /**
     * Clears the typeahead buffer.
     */ MDCListFoundation1.prototype.clearTypeaheadBuffer = function() {
        _typeahead.clearBuffer(this.typeaheadState);
    };
    return MDCListFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCListFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","@material/dom/keyboard":"5gaWj","./constants":"5wBVC","./events":"dsWXg","./typeahead":"7rMsD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gaWj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KEY", ()=>KEY
);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */ parcelHelpers.export(exports, "normalizeKey", ()=>normalizeKey
);
/**
 * isNavigationEvent returns whether the event is a navigation event
 */ parcelHelpers.export(exports, "isNavigationEvent", ()=>isNavigationEvent
);
var KEY = {
    UNKNOWN: 'Unknown',
    BACKSPACE: 'Backspace',
    ENTER: 'Enter',
    SPACEBAR: 'Spacebar',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    END: 'End',
    HOME: 'Home',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_UP: 'ArrowUp',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_DOWN: 'ArrowDown',
    DELETE: 'Delete',
    ESCAPE: 'Escape',
    TAB: 'Tab'
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
function normalizeKey(evt) {
    var key = evt.key;
    // If the event already has a normalized key, return it
    if (normalizedKeys.has(key)) return key;
    // tslint:disable-next-line:deprecation
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) return mappedKey;
    return KEY.UNKNOWN;
}
function isNavigationEvent(evt) {
    return navigationKeys.has(normalizeKey(evt));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsWXg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preventDefaultEvent", ()=>preventDefaultEvent
);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var ELEMENTS_KEY_ALLOWED_IN = [
    'input',
    'button',
    'textarea',
    'select'
];
var preventDefaultEvent = function(evt) {
    var target = evt.target;
    if (!target) return;
    var tagName = ("" + target.tagName).toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) evt.preventDefault();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rMsD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Initializes a state object for typeahead. Use the same reference for calls to
 * typeahead functions.
 *
 * @return The current state of the typeahead process. Each state reference
 *     represents a typeahead instance as the reference is typically mutated
 *     in-place.
 */ parcelHelpers.export(exports, "initState", ()=>initState
);
/**
 * Initializes typeahead state by indexing the current list items by primary
 * text into the sortedIndexByFirstChar data structure.
 *
 * @param listItemCount numer of items in the list
 * @param getPrimaryTextByItemIndex function that returns the primary text at a
 *     given index
 *
 * @return Map that maps the first character of the primary text to the full
 *     list text and it's index
 */ parcelHelpers.export(exports, "initSortedIndex", ()=>initSortedIndex
);
/**
 * Given the next desired character from the user, it attempts to find the next
 * list option matching the buffer. Wraps around if at the end of options.
 *
 * @param opts Options and accessors
 *   - nextChar - the next character to match against items
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - skipFocus - whether or not to focus the matched item
 *   - isItemAtIndexDisabled - function that determines whether an item at a
 *        given index is disabled
 * @param state The typeahead state instance. See `initState`.
 *
 * @return The index of the matched item, or -1 if no match.
 */ parcelHelpers.export(exports, "matchItem", ()=>matchItem
);
/**
 * Whether or not the given typeahead instaance state is currently typing.
 *
 * @param state The typeahead state instance. See `initState`.
 */ parcelHelpers.export(exports, "isTypingInProgress", ()=>isTypingInProgress
);
/**
 * Clears the typeahaed buffer so that it resets item matching to the first
 * character.
 *
 * @param state The typeahead state instance. See `initState`.
 */ parcelHelpers.export(exports, "clearBuffer", ()=>clearBuffer
);
/**
 * Given a keydown event, it calculates whether or not to automatically focus a
 * list item depending on what was typed mimicing the typeahead functionality of
 * a standard <select> element that is open.
 *
 * @param opts Options and accessors
 *   - event - the KeyboardEvent to handle and parse
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
 *      is disabled
 *   - isTargetListItem - whether or not the event target is a list item
 * @param state The typeahead state instance. See `initState`.
 *
 * @returns index of the item matched by the keydown. -1 if not matched.
 */ parcelHelpers.export(exports, "handleKeydown", ()=>handleKeydown
);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _keyboard = require("@material/dom/keyboard");
var _constants = require("./constants");
var _events = require("./events");
function initState() {
    var state = {
        bufferClearTimeout: 0,
        currentFirstChar: '',
        sortedIndexCursor: 0,
        typeaheadBuffer: ''
    };
    return state;
}
function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
    var sortedIndexByFirstChar = new Map();
    // Aggregate item text to index mapping
    for(var i = 0; i < listItemCount; i++){
        var primaryText = getPrimaryTextByItemIndex(i).trim();
        if (!primaryText) continue;
        var firstChar = primaryText[0].toLowerCase();
        if (!sortedIndexByFirstChar.has(firstChar)) sortedIndexByFirstChar.set(firstChar, []);
        sortedIndexByFirstChar.get(firstChar).push({
            text: primaryText.toLowerCase(),
            index: i
        });
    }
    // Sort the mapping
    // TODO(b/157162694): Investigate replacing forEach with Map.values()
    sortedIndexByFirstChar.forEach(function(values) {
        values.sort(function(first, second) {
            return first.index - second.index;
        });
    });
    return sortedIndexByFirstChar;
}
function matchItem(opts, state) {
    var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    clearTimeout(state.bufferClearTimeout);
    state.bufferClearTimeout = setTimeout(function() {
        clearBuffer(state);
    }, _constants.numbers.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
    state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
    var index;
    if (state.typeaheadBuffer.length === 1) index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
    else index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
    if (index !== -1 && !skipFocus) focusItemAtIndex(index);
    return index;
}
/**
 * Matches the user's single input character in the buffer to the
 * next option that begins with such character. Wraps around if at
 * end of options. Returns -1 if no match is found.
 */ function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) return -1;
    // Has the same firstChar been recently matched?
    // Also, did starting index remain the same between key presses?
    // If both hold true, simply increment index.
    if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
        state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
        var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
        if (!isItemAtIndexDisabled(newIndex)) return newIndex;
    }
    // If we're here, it means one of the following happened:
    // - either firstChar or startingIndex has changed, invalidating the
    // cursor.
    // - The next item of typeahead is disabled, so we have to look further.
    state.currentFirstChar = firstChar;
    var newCursorPosition = -1;
    var cursorPosition;
    // Find the first non-disabled item as a fallback.
    for(cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++)if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
        newCursorPosition = cursorPosition;
        break;
    }
    // Advance cursor to first item matching the firstChar that is positioned
    // after starting item. Cursor is unchanged from fallback if there's no
    // such item.
    for(; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++)if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
        newCursorPosition = cursorPosition;
        break;
    }
    if (newCursorPosition !== -1) {
        state.sortedIndexCursor = newCursorPosition;
        return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
}
/**
 * Attempts to find the next item that matches all of the typeahead buffer.
 * Wraps around if at end of options. Returns -1 if no match is found.
 */ function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) return -1;
    // Do nothing if text already matches
    var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
    if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) return startingItem.index;
    // Find next item that matches completely; if no match, we'll eventually
    // loop around to same position
    var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var nextCursorPosition = -1;
    while(cursorPosition !== state.sortedIndexCursor){
        var currentItem = itemsMatchingFirstChar[cursorPosition];
        var matches = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
        var isEnabled = !isItemAtIndexDisabled(currentItem.index);
        if (matches && isEnabled) {
            nextCursorPosition = cursorPosition;
            break;
        }
        cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
    }
    if (nextCursorPosition !== -1) {
        state.sortedIndexCursor = nextCursorPosition;
        return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
}
function isTypingInProgress(state) {
    return state.typeaheadBuffer.length > 0;
}
function clearBuffer(state) {
    state.typeaheadBuffer = '';
}
function handleKeydown(opts, state) {
    var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    var isArrowLeft = _keyboard.normalizeKey(event) === 'ArrowLeft';
    var isArrowUp = _keyboard.normalizeKey(event) === 'ArrowUp';
    var isArrowRight = _keyboard.normalizeKey(event) === 'ArrowRight';
    var isArrowDown = _keyboard.normalizeKey(event) === 'ArrowDown';
    var isHome = _keyboard.normalizeKey(event) === 'Home';
    var isEnd = _keyboard.normalizeKey(event) === 'End';
    var isEnter = _keyboard.normalizeKey(event) === 'Enter';
    var isSpace = _keyboard.normalizeKey(event) === 'Spacebar';
    if (event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) return -1;
    var isCharacterKey = !isSpace && event.key.length === 1;
    if (isCharacterKey) {
        _events.preventDefaultEvent(event);
        var matchItemOpts = {
            focusItemAtIndex: focusItemAtIndex,
            focusedItemIndex: focusedItemIndex,
            nextChar: event.key.toLowerCase(),
            sortedIndexByFirstChar: sortedIndexByFirstChar,
            skipFocus: false,
            isItemAtIndexDisabled: isItemAtIndexDisabled
        };
        return matchItem(matchItemOpts, state);
    }
    if (!isSpace) return -1;
    if (isTargetListItem) _events.preventDefaultEvent(event);
    var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
    if (typeaheadOnListItem) {
        var matchItemOpts = {
            focusItemAtIndex: focusItemAtIndex,
            focusedItemIndex: focusedItemIndex,
            nextChar: ' ',
            sortedIndexByFirstChar: sortedIndexByFirstChar,
            skipFocus: false,
            isItemAtIndexDisabled: isItemAtIndexDisabled
        };
        // space participates in typeahead matching if in rapid typing mode
        return matchItem(matchItemOpts, state);
    }
    return -1;
}

},{"@material/dom/keyboard":"5gaWj","./constants":"5wBVC","./events":"dsWXg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6F4EL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iAIQW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _adapter = require("./adapter");
parcelHelpers.exportAll(_adapter, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _foundation = require("./foundation");
parcelHelpers.exportAll(_foundation, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _index = require("./character-counter/index");
parcelHelpers.exportAll(_index, exports);
var _index1 = require("./helper-text/index");
parcelHelpers.exportAll(_index1, exports);
var _index2 = require("./icon/index");
parcelHelpers.exportAll(_index2, exports);

},{"./adapter":"9lQks","./component":"druY6","./constants":"wdBr4","./foundation":"2UHkh","./types":"4SZIS","./character-counter/index":"8ibHT","./helper-text/index":"j9yda","./icon/index":"82Zgi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9lQks":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"druY6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTextField", ()=>MDCTextField
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _events = require("@material/dom/events");
var _ponyfill = require("@material/dom/ponyfill");
var _component1 = require("@material/floating-label/component");
var _component2 = require("@material/line-ripple/component");
var _component3 = require("@material/notched-outline/component");
var _component4 = require("@material/ripple/component");
var _foundation = require("@material/ripple/foundation");
var _component5 = require("./character-counter/component");
var _foundation1 = require("./character-counter/foundation");
var _constants = require("./constants");
var _foundation2 = require("./foundation");
var _component6 = require("./helper-text/component");
var _foundation3 = require("./helper-text/foundation");
var _component7 = require("./icon/component");
var MDCTextField = function(_super) {
    _tslib.__extends(MDCTextField1, _super);
    function MDCTextField1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextField1.attachTo = function(root) {
        return new MDCTextField1(root);
    };
    MDCTextField1.prototype.initialize = function(rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
        if (rippleFactory === void 0) rippleFactory = function(el, foundation) {
            return new _component4.MDCRipple(el, foundation);
        };
        if (lineRippleFactory === void 0) lineRippleFactory = function(el) {
            return new _component2.MDCLineRipple(el);
        };
        if (helperTextFactory === void 0) helperTextFactory = function(el) {
            return new _component6.MDCTextFieldHelperText(el);
        };
        if (characterCounterFactory === void 0) characterCounterFactory = function(el) {
            return new _component5.MDCTextFieldCharacterCounter(el);
        };
        if (iconFactory === void 0) iconFactory = function(el) {
            return new _component7.MDCTextFieldIcon(el);
        };
        if (labelFactory === void 0) labelFactory = function(el) {
            return new _component1.MDCFloatingLabel(el);
        };
        if (outlineFactory === void 0) outlineFactory = function(el) {
            return new _component3.MDCNotchedOutline(el);
        };
        this.input = this.root.querySelector(_constants.strings.INPUT_SELECTOR);
        var labelElement = this.root.querySelector(_constants.strings.LABEL_SELECTOR);
        this.label = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root.querySelector(_constants.strings.LINE_RIPPLE_SELECTOR);
        this.lineRipple = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root.querySelector(_constants.strings.OUTLINE_SELECTOR);
        this.outline = outlineElement ? outlineFactory(outlineElement) : null;
        // Helper text
        var helperTextStrings = _foundation3.MDCTextFieldHelperTextFoundation.strings;
        var nextElementSibling = this.root.nextElementSibling;
        var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains(_constants.cssClasses.HELPER_LINE);
        var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
        this.helperText = helperTextEl ? helperTextFactory(helperTextEl) : null;
        // Character counter
        var characterCounterStrings = _foundation1.MDCTextFieldCharacterCounterFoundation.strings;
        var characterCounterEl = this.root.querySelector(characterCounterStrings.ROOT_SELECTOR);
        // If character counter is not found in root element search in sibling element.
        if (!characterCounterEl && hasHelperLine && nextElementSibling) characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
        this.characterCounter = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
        // Leading icon
        var leadingIconEl = this.root.querySelector(_constants.strings.LEADING_ICON_SELECTOR);
        this.leadingIcon = leadingIconEl ? iconFactory(leadingIconEl) : null;
        // Trailing icon
        var trailingIconEl = this.root.querySelector(_constants.strings.TRAILING_ICON_SELECTOR);
        this.trailingIcon = trailingIconEl ? iconFactory(trailingIconEl) : null;
        // Prefix and Suffix
        this.prefix = this.root.querySelector(_constants.strings.PREFIX_SELECTOR);
        this.suffix = this.root.querySelector(_constants.strings.SUFFIX_SELECTOR);
        this.ripple = this.createRipple(rippleFactory);
    };
    MDCTextField1.prototype.destroy = function() {
        if (this.ripple) this.ripple.destroy();
        if (this.lineRipple) this.lineRipple.destroy();
        if (this.helperText) this.helperText.destroy();
        if (this.characterCounter) this.characterCounter.destroy();
        if (this.leadingIcon) this.leadingIcon.destroy();
        if (this.trailingIcon) this.trailingIcon.destroy();
        if (this.label) this.label.destroy();
        if (this.outline) this.outline.destroy();
        _super.prototype.destroy.call(this);
    };
    /**
     * Initializes the Text Field's internal state based on the environment's
     * state.
     */ MDCTextField1.prototype.initialSyncWithDOM = function() {
        this.disabled = this.input.disabled;
    };
    Object.defineProperty(MDCTextField1.prototype, "value", {
        get: function() {
            return this.foundation.getValue();
        },
        /**
         * @param value The value to set on the input.
         */ set: function(value) {
            this.foundation.setValue(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "disabled", {
        get: function() {
            return this.foundation.isDisabled();
        },
        /**
         * @param disabled Sets the Text Field disabled or enabled.
         */ set: function(disabled) {
            this.foundation.setDisabled(disabled);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "valid", {
        get: function() {
            return this.foundation.isValid();
        },
        /**
         * @param valid Sets the Text Field valid or invalid.
         */ set: function(valid) {
            this.foundation.setValid(valid);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "required", {
        get: function() {
            return this.input.required;
        },
        /**
         * @param required Sets the Text Field to required.
         */ set: function(required) {
            this.input.required = required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "pattern", {
        get: function() {
            return this.input.pattern;
        },
        /**
         * @param pattern Sets the input element's validation pattern.
         */ set: function(pattern) {
            this.input.pattern = pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "minLength", {
        get: function() {
            return this.input.minLength;
        },
        /**
         * @param minLength Sets the input element's minLength.
         */ set: function(minLength) {
            this.input.minLength = minLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "maxLength", {
        get: function() {
            return this.input.maxLength;
        },
        /**
         * @param maxLength Sets the input element's maxLength.
         */ set: function(maxLength) {
            // Chrome throws exception if maxLength is set to a value less than zero
            if (maxLength < 0) this.input.removeAttribute('maxLength');
            else this.input.maxLength = maxLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "min", {
        get: function() {
            return this.input.min;
        },
        /**
         * @param min Sets the input element's min.
         */ set: function(min) {
            this.input.min = min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "max", {
        get: function() {
            return this.input.max;
        },
        /**
         * @param max Sets the input element's max.
         */ set: function(max) {
            this.input.max = max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "step", {
        get: function() {
            return this.input.step;
        },
        /**
         * @param step Sets the input element's step.
         */ set: function(step) {
            this.input.step = step;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "helperTextContent", {
        /**
         * Sets the helper text element content.
         */ set: function(content) {
            this.foundation.setHelperTextContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "leadingIconAriaLabel", {
        /**
         * Sets the aria label of the leading icon.
         */ set: function(label) {
            this.foundation.setLeadingIconAriaLabel(label);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */ set: function(content) {
            this.foundation.setLeadingIconContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "trailingIconAriaLabel", {
        /**
         * Sets the aria label of the trailing icon.
         */ set: function(label) {
            this.foundation.setTrailingIconAriaLabel(label);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "trailingIconContent", {
        /**
         * Sets the text content of the trailing icon.
         */ set: function(content) {
            this.foundation.setTrailingIconContent(content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "useNativeValidation", {
        /**
         * Enables or disables the use of native validation. Use this for custom validation.
         * @param useNativeValidation Set this to false to ignore native input validation.
         */ set: function(useNativeValidation) {
            this.foundation.setUseNativeValidation(useNativeValidation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "prefixText", {
        /**
         * Gets the text content of the prefix, or null if it does not exist.
         */ get: function() {
            return this.prefix ? this.prefix.textContent : null;
        },
        /**
         * Sets the text content of the prefix, if it exists.
         */ set: function(prefixText) {
            if (this.prefix) this.prefix.textContent = prefixText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextField1.prototype, "suffixText", {
        /**
         * Gets the text content of the suffix, or null if it does not exist.
         */ get: function() {
            return this.suffix ? this.suffix.textContent : null;
        },
        /**
         * Sets the text content of the suffix, if it exists.
         */ set: function(suffixText) {
            if (this.suffix) this.suffix.textContent = suffixText;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Focuses the input element.
     */ MDCTextField1.prototype.focus = function() {
        this.input.focus();
    };
    /**
     * Recomputes the outline SVG path for the outline element.
     */ MDCTextField1.prototype.layout = function() {
        var openNotch = this.foundation.shouldFloat;
        this.foundation.notchOutline(openNotch);
    };
    MDCTextField1.prototype.getDefaultFoundation = function() {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = _tslib.__assign(_tslib.__assign(_tslib.__assign(_tslib.__assign(_tslib.__assign({
        }, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
        // tslint:enable:object-literal-sort-keys
        return new _foundation2.MDCTextFieldFoundation(adapter, this.getFoundationMap());
    };
    MDCTextField1.prototype.getRootAdapterMethods = function() {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            hasClass: function(className) {
                return _this.root.classList.contains(className);
            },
            registerTextFieldInteractionHandler: function(evtType, handler) {
                _this.listen(evtType, handler);
            },
            deregisterTextFieldInteractionHandler: function(evtType, handler) {
                _this.unlisten(evtType, handler);
            },
            registerValidationAttributeChangeHandler: function(handler) {
                var getAttributesList = function(mutationsList) {
                    return mutationsList.map(function(mutation) {
                        return mutation.attributeName;
                    }).filter(function(attributeName) {
                        return attributeName;
                    });
                };
                var observer = new MutationObserver(function(mutationsList) {
                    return handler(getAttributesList(mutationsList));
                });
                var config = {
                    attributes: true
                };
                observer.observe(_this.input, config);
                return observer;
            },
            deregisterValidationAttributeChangeHandler: function(observer) {
                observer.disconnect();
            }
        };
    // tslint:enable:object-literal-sort-keys
    };
    MDCTextField1.prototype.getInputAdapterMethods = function() {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getNativeInput: function() {
                return _this.input;
            },
            setInputAttr: function(attr, value) {
                _this.input.setAttribute(attr, value);
            },
            removeInputAttr: function(attr) {
                _this.input.removeAttribute(attr);
            },
            isFocused: function() {
                return document.activeElement === _this.input;
            },
            registerInputInteractionHandler: function(evtType, handler) {
                _this.input.addEventListener(evtType, handler, _events.applyPassive());
            },
            deregisterInputInteractionHandler: function(evtType, handler) {
                _this.input.removeEventListener(evtType, handler, _events.applyPassive());
            }
        };
    // tslint:enable:object-literal-sort-keys
    };
    MDCTextField1.prototype.getLabelAdapterMethods = function() {
        var _this = this;
        return {
            floatLabel: function(shouldFloat) {
                _this.label && _this.label.float(shouldFloat);
            },
            getLabelWidth: function() {
                return _this.label ? _this.label.getWidth() : 0;
            },
            hasLabel: function() {
                return Boolean(_this.label);
            },
            shakeLabel: function(shouldShake) {
                _this.label && _this.label.shake(shouldShake);
            },
            setLabelRequired: function(isRequired) {
                _this.label && _this.label.setRequired(isRequired);
            }
        };
    };
    MDCTextField1.prototype.getLineRippleAdapterMethods = function() {
        var _this = this;
        return {
            activateLineRipple: function() {
                if (_this.lineRipple) _this.lineRipple.activate();
            },
            deactivateLineRipple: function() {
                if (_this.lineRipple) _this.lineRipple.deactivate();
            },
            setLineRippleTransformOrigin: function(normalizedX) {
                if (_this.lineRipple) _this.lineRipple.setRippleCenter(normalizedX);
            }
        };
    };
    MDCTextField1.prototype.getOutlineAdapterMethods = function() {
        var _this = this;
        return {
            closeOutline: function() {
                _this.outline && _this.outline.closeNotch();
            },
            hasOutline: function() {
                return Boolean(_this.outline);
            },
            notchOutline: function(labelWidth) {
                _this.outline && _this.outline.notch(labelWidth);
            }
        };
    };
    /**
     * @return A map of all subcomponents to subfoundations.
     */ MDCTextField1.prototype.getFoundationMap = function() {
        return {
            characterCounter: this.characterCounter ? this.characterCounter.foundationForTextField : undefined,
            helperText: this.helperText ? this.helperText.foundationForTextField : undefined,
            leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForTextField : undefined,
            trailingIcon: this.trailingIcon ? this.trailingIcon.foundationForTextField : undefined
        };
    };
    MDCTextField1.prototype.createRipple = function(rippleFactory) {
        var _this = this;
        var isTextArea = this.root.classList.contains(_constants.cssClasses.TEXTAREA);
        var isOutlined = this.root.classList.contains(_constants.cssClasses.OUTLINED);
        if (isTextArea || isOutlined) return null;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = _tslib.__assign(_tslib.__assign({
        }, _component4.MDCRipple.createAdapter(this)), {
            isSurfaceActive: function() {
                return _ponyfill.matches(_this.input, ':active');
            },
            registerInteractionHandler: function(evtType, handler) {
                _this.input.addEventListener(evtType, handler, _events.applyPassive());
            },
            deregisterInteractionHandler: function(evtType, handler) {
                _this.input.removeEventListener(evtType, handler, _events.applyPassive());
            }
        });
        // tslint:enable:object-literal-sort-keys
        return rippleFactory(this.root, new _foundation.MDCRippleFoundation(adapter));
    };
    return MDCTextField1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/dom/events":"87xmx","@material/dom/ponyfill":"8pLcv","@material/floating-label/component":"larjq","@material/line-ripple/component":"4xpf3","@material/notched-outline/component":"ibiBS","@material/ripple/component":"035sE","@material/ripple/foundation":"7frpT","./character-counter/component":"hwtce","./character-counter/foundation":"dpux4","./constants":"wdBr4","./foundation":"2UHkh","./helper-text/component":"bX2wx","./helper-text/foundation":"5gLP0","./icon/component":"gn4Te","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"larjq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCFloatingLabel", ()=>MDCFloatingLabel
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _ponyfill = require("@material/dom/ponyfill");
var _foundation = require("./foundation");
var MDCFloatingLabel = function(_super) {
    _tslib.__extends(MDCFloatingLabel1, _super);
    function MDCFloatingLabel1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel1.attachTo = function(root) {
        return new MDCFloatingLabel1(root);
    };
    /**
     * Styles the label to produce the label shake for errors.
     * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
     */ MDCFloatingLabel1.prototype.shake = function(shouldShake) {
        this.foundation.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */ MDCFloatingLabel1.prototype.float = function(shouldFloat) {
        this.foundation.float(shouldFloat);
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */ MDCFloatingLabel1.prototype.setRequired = function(isRequired) {
        this.foundation.setRequired(isRequired);
    };
    MDCFloatingLabel1.prototype.getWidth = function() {
        return this.foundation.getWidth();
    };
    MDCFloatingLabel1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            getWidth: function() {
                return _ponyfill.estimateScrollWidth(_this.root);
            },
            registerInteractionHandler: function(evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function(evtType, handler) {
                return _this.unlisten(evtType, handler);
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation.MDCFloatingLabelFoundation(adapter);
    };
    return MDCFloatingLabel1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/dom/ponyfill":"8pLcv","./foundation":"824lp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"824lp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCFloatingLabelFoundation", ()=>MDCFloatingLabelFoundation
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var MDCFloatingLabelFoundation = function(_super) {
    _tslib.__extends(MDCFloatingLabelFoundation1, _super);
    function MDCFloatingLabelFoundation1(adapter) {
        var _this = _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCFloatingLabelFoundation1.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler = function() {
            _this.handleShakeAnimationEnd();
        };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                getWidth: function() {
                    return 0;
                },
                registerInteractionHandler: function() {
                    return undefined;
                },
                deregisterInteractionHandler: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCFloatingLabelFoundation1.prototype.init = function() {
        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation1.prototype.destroy = function() {
        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
    };
    /**
     * Returns the width of the label element.
     */ MDCFloatingLabelFoundation1.prototype.getWidth = function() {
        return this.adapter.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */ MDCFloatingLabelFoundation1.prototype.shake = function(shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation1.cssClasses.LABEL_SHAKE;
        if (shouldShake) this.adapter.addClass(LABEL_SHAKE);
        else this.adapter.removeClass(LABEL_SHAKE);
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */ MDCFloatingLabelFoundation1.prototype.float = function(shouldFloat) {
        var _a = MDCFloatingLabelFoundation1.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) this.adapter.addClass(LABEL_FLOAT_ABOVE);
        else {
            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */ MDCFloatingLabelFoundation1.prototype.setRequired = function(isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation1.cssClasses.LABEL_REQUIRED;
        if (isRequired) this.adapter.addClass(LABEL_REQUIRED);
        else this.adapter.removeClass(LABEL_REQUIRED);
    };
    MDCFloatingLabelFoundation1.prototype.handleShakeAnimationEnd = function() {
        var LABEL_SHAKE = MDCFloatingLabelFoundation1.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCFloatingLabelFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"agpve","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"agpve":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
var cssClasses = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_REQUIRED: 'mdc-floating-label--required',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xpf3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCLineRipple", ()=>MDCLineRipple
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _foundation = require("./foundation");
var MDCLineRipple = function(_super) {
    _tslib.__extends(MDCLineRipple1, _super);
    function MDCLineRipple1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple1.attachTo = function(root) {
        return new MDCLineRipple1(root);
    };
    /**
     * Activates the line ripple
     */ MDCLineRipple1.prototype.activate = function() {
        this.foundation.activate();
    };
    /**
     * Deactivates the line ripple
     */ MDCLineRipple1.prototype.deactivate = function() {
        this.foundation.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */ MDCLineRipple1.prototype.setRippleCenter = function(xCoordinate) {
        this.foundation.setRippleCenter(xCoordinate);
    };
    MDCLineRipple1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            hasClass: function(className) {
                return _this.root.classList.contains(className);
            },
            setStyle: function(propertyName, value) {
                return _this.root.style.setProperty(propertyName, value);
            },
            registerEventHandler: function(evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterEventHandler: function(evtType, handler) {
                return _this.unlisten(evtType, handler);
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation.MDCLineRippleFoundation(adapter);
    };
    return MDCLineRipple1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","./foundation":"lo039","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lo039":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCLineRippleFoundation", ()=>MDCLineRippleFoundation
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var MDCLineRippleFoundation = function(_super) {
    _tslib.__extends(MDCLineRippleFoundation1, _super);
    function MDCLineRippleFoundation1(adapter) {
        var _this = _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCLineRippleFoundation1.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler = function(evt) {
            _this.handleTransitionEnd(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                hasClass: function() {
                    return false;
                },
                setStyle: function() {
                    return undefined;
                },
                registerEventHandler: function() {
                    return undefined;
                },
                deregisterEventHandler: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCLineRippleFoundation1.prototype.init = function() {
        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation1.prototype.destroy = function() {
        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
    };
    MDCLineRippleFoundation1.prototype.activate = function() {
        this.adapter.removeClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(_constants.cssClasses.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation1.prototype.setRippleCenter = function(xCoordinate) {
        this.adapter.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation1.prototype.deactivate = function() {
        this.adapter.addClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation1.prototype.handleTransitionEnd = function(evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter.hasClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter.removeClass(_constants.cssClasses.LINE_RIPPLE_ACTIVE);
                this.adapter.removeClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCLineRippleFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"a9qJj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a9qJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var cssClasses = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibiBS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCNotchedOutline", ()=>MDCNotchedOutline
);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _foundation = require("@material/floating-label/foundation");
var _constants = require("./constants");
var _foundation1 = require("./foundation");
var MDCNotchedOutline = function(_super) {
    _tslib.__extends(MDCNotchedOutline1, _super);
    function MDCNotchedOutline1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline1.attachTo = function(root) {
        return new MDCNotchedOutline1(root);
    };
    MDCNotchedOutline1.prototype.initialSyncWithDOM = function() {
        this.notchElement = this.root.querySelector(_constants.strings.NOTCH_ELEMENT_SELECTOR);
        var label = this.root.querySelector('.' + _foundation.MDCFloatingLabelFoundation.cssClasses.ROOT);
        if (label) {
            label.style.transitionDuration = '0s';
            this.root.classList.add(_constants.cssClasses.OUTLINE_UPGRADED);
            requestAnimationFrame(function() {
                label.style.transitionDuration = '';
            });
        } else this.root.classList.add(_constants.cssClasses.NO_LABEL);
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */ MDCNotchedOutline1.prototype.notch = function(notchWidth) {
        this.foundation.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */ MDCNotchedOutline1.prototype.closeNotch = function() {
        this.foundation.closeNotch();
    };
    MDCNotchedOutline1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            setNotchWidthProperty: function(width) {
                _this.notchElement.style.setProperty('width', width + 'px');
            },
            removeNotchWidthProperty: function() {
                _this.notchElement.style.removeProperty('width');
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation1.MDCNotchedOutlineFoundation(adapter);
    };
    return MDCNotchedOutline1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/floating-label/foundation":"824lp","./constants":"3IcFA","./foundation":"6fuu9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IcFA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
parcelHelpers.export(exports, "numbers", ()=>numbers
);
parcelHelpers.export(exports, "strings", ()=>strings
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8
};
var cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fuu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCNotchedOutlineFoundation", ()=>MDCNotchedOutlineFoundation
);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var MDCNotchedOutlineFoundation = function(_super) {
    _tslib.__extends(MDCNotchedOutlineFoundation1, _super);
    function MDCNotchedOutlineFoundation1(adapter) {
        return _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCNotchedOutlineFoundation1.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation1, "strings", {
        get: function() {
            return _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation1, "numbers", {
        get: function() {
            return _constants.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                setNotchWidthProperty: function() {
                    return undefined;
                },
                removeNotchWidthProperty: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */ MDCNotchedOutlineFoundation1.prototype.notch = function(notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation1.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) notchWidth += _constants.numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */ MDCNotchedOutlineFoundation1.prototype.closeNotch = function() {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation1.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCNotchedOutlineFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"3IcFA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwtce":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTextFieldCharacterCounter", ()=>MDCTextFieldCharacterCounter
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _foundation = require("./foundation");
var MDCTextFieldCharacterCounter = function(_super) {
    _tslib.__extends(MDCTextFieldCharacterCounter1, _super);
    function MDCTextFieldCharacterCounter1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldCharacterCounter1.attachTo = function(root) {
        return new MDCTextFieldCharacterCounter1(root);
    };
    Object.defineProperty(MDCTextFieldCharacterCounter1.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function() {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldCharacterCounter1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            setContent: function(content) {
                _this.root.textContent = content;
            }
        };
        return new _foundation.MDCTextFieldCharacterCounterFoundation(adapter);
    };
    return MDCTextFieldCharacterCounter1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","./foundation":"dpux4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dpux4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTextFieldCharacterCounterFoundation", ()=>MDCTextFieldCharacterCounterFoundation
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var MDCTextFieldCharacterCounterFoundation = function(_super) {
    _tslib.__extends(MDCTextFieldCharacterCounterFoundation1, _super);
    function MDCTextFieldCharacterCounterFoundation1(adapter) {
        return _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCTextFieldCharacterCounterFoundation1.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation1, "strings", {
        get: function() {
            return _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
         */ get: function() {
            return {
                setContent: function() {
                    return undefined;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldCharacterCounterFoundation1.prototype.setCounterValue = function(currentLength, maxLength) {
        currentLength = Math.min(currentLength, maxLength);
        this.adapter.setContent(currentLength + " / " + maxLength);
    };
    return MDCTextFieldCharacterCounterFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCTextFieldCharacterCounterFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"1cPx3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cPx3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "strings", ()=>strings
);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var cssClasses = {
    ROOT: 'mdc-text-field-character-counter'
};
var strings = {
    ROOT_SELECTOR: "." + cssClasses.ROOT
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"wdBr4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
parcelHelpers.export(exports, "strings", ()=>strings
);
parcelHelpers.export(exports, "numbers", ()=>numbers
);
parcelHelpers.export(exports, "VALIDATION_ATTR_WHITELIST", ()=>VALIDATION_ATTR_WHITELIST
);
parcelHelpers.export(exports, "ALWAYS_FLOAT_TYPES", ()=>ALWAYS_FLOAT_TYPES
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_DESCRIBEDBY: 'aria-describedby',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',
    SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',
    TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
var cssClasses = {
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    LABEL_FLOATING: 'mdc-text-field--label-floating',
    NO_LABEL: 'mdc-text-field--no-label',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
    WITH_INTERNAL_COUNTER: 'mdc-text-field--with-internal-counter'
};
var numbers = {
    LABEL_SCALE: 0.75
};
/**
 * Whitelist based off of
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */ var VALIDATION_ATTR_WHITELIST = [
    'pattern',
    'min',
    'max',
    'required',
    'step',
    'minlength',
    'maxlength', 
];
/**
 * Label should always float for these types as they show some UI even if value
 * is empty.
 */ var ALWAYS_FLOAT_TYPES = [
    'color',
    'date',
    'datetime-local',
    'month',
    'range',
    'time',
    'week', 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2UHkh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTextFieldFoundation", ()=>MDCTextFieldFoundation
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var POINTERDOWN_EVENTS = [
    'mousedown',
    'touchstart'
];
var INTERACTION_EVENTS = [
    'click',
    'keydown'
];
var MDCTextFieldFoundation = function(_super) {
    _tslib.__extends(MDCTextFieldFoundation1, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */ function MDCTextFieldFoundation1(adapter, foundationMap) {
        if (foundationMap === void 0) foundationMap = {
        };
        var _this = _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCTextFieldFoundation1.defaultAdapter), adapter)) || this;
        _this.isFocused = false;
        _this.receivedUserInput = false;
        _this.valid = true;
        _this.useNativeValidation = true;
        _this.validateOnValueChange = true;
        _this.helperText = foundationMap.helperText;
        _this.characterCounter = foundationMap.characterCounter;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.trailingIcon = foundationMap.trailingIcon;
        _this.inputFocusHandler = function() {
            _this.activateFocus();
        };
        _this.inputBlurHandler = function() {
            _this.deactivateFocus();
        };
        _this.inputInputHandler = function() {
            _this.handleInput();
        };
        _this.setPointerXOffset = function(evt) {
            _this.setTransformOrigin(evt);
        };
        _this.textFieldInteractionHandler = function() {
            _this.handleTextFieldInteraction();
        };
        _this.validationAttributeChangeHandler = function(attributesList) {
            _this.handleValidationAttributeChange(attributesList);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1, "strings", {
        get: function() {
            return _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1, "numbers", {
        get: function() {
            return _constants.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1.prototype, "shouldAlwaysFloat", {
        get: function() {
            var type = this.getNativeInput().type;
            return _constants.ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1.prototype, "shouldFloat", {
        get: function() {
            return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1.prototype, "shouldShake", {
        get: function() {
            return !this.isFocused && !this.isValid() && !!this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and
         * return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                hasClass: function() {
                    return true;
                },
                setInputAttr: function() {
                    return undefined;
                },
                removeInputAttr: function() {
                    return undefined;
                },
                registerTextFieldInteractionHandler: function() {
                    return undefined;
                },
                deregisterTextFieldInteractionHandler: function() {
                    return undefined;
                },
                registerInputInteractionHandler: function() {
                    return undefined;
                },
                deregisterInputInteractionHandler: function() {
                    return undefined;
                },
                registerValidationAttributeChangeHandler: function() {
                    return new MutationObserver(function() {
                        return undefined;
                    });
                },
                deregisterValidationAttributeChangeHandler: function() {
                    return undefined;
                },
                getNativeInput: function() {
                    return null;
                },
                isFocused: function() {
                    return false;
                },
                activateLineRipple: function() {
                    return undefined;
                },
                deactivateLineRipple: function() {
                    return undefined;
                },
                setLineRippleTransformOrigin: function() {
                    return undefined;
                },
                shakeLabel: function() {
                    return undefined;
                },
                floatLabel: function() {
                    return undefined;
                },
                setLabelRequired: function() {
                    return undefined;
                },
                hasLabel: function() {
                    return false;
                },
                getLabelWidth: function() {
                    return 0;
                },
                hasOutline: function() {
                    return false;
                },
                notchOutline: function() {
                    return undefined;
                },
                closeOutline: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldFoundation1.prototype.init = function() {
        var e_1, _a, e_2, _b;
        if (this.adapter.hasLabel() && this.getNativeInput().required) this.adapter.setLabelRequired(true);
        if (this.adapter.isFocused()) this.inputFocusHandler();
        else if (this.adapter.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter.floatLabel(true);
            this.styleFloating(true);
        }
        this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.registerInputInteractionHandler('input', this.inputInputHandler);
        try {
            for(var POINTERDOWN_EVENTS_1 = _tslib.__values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()){
                var evtType = POINTERDOWN_EVENTS_1_1.value;
                this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a = POINTERDOWN_EVENTS_1.return)) _a.call(POINTERDOWN_EVENTS_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        try {
            for(var INTERACTION_EVENTS_1 = _tslib.__values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()){
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b = INTERACTION_EVENTS_1.return)) _b.call(INTERACTION_EVENTS_1);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
        this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
        this.setcharacterCounter(this.getValue().length);
    };
    MDCTextFieldFoundation1.prototype.destroy = function() {
        var e_3, _a, e_4, _b;
        this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler);
        try {
            for(var POINTERDOWN_EVENTS_2 = _tslib.__values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()){
                var evtType = POINTERDOWN_EVENTS_2_1.value;
                this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a = POINTERDOWN_EVENTS_2.return)) _a.call(POINTERDOWN_EVENTS_2);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
        try {
            for(var INTERACTION_EVENTS_2 = _tslib.__values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()){
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b = INTERACTION_EVENTS_2.return)) _b.call(INTERACTION_EVENTS_2);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    };
    /**
     * Handles user interactions with the Text Field.
     */ MDCTextFieldFoundation1.prototype.handleTextFieldInteraction = function() {
        var nativeInput = this.adapter.getNativeInput();
        if (nativeInput && nativeInput.disabled) return;
        this.receivedUserInput = true;
    };
    /**
     * Handles validation attribute changes
     */ MDCTextFieldFoundation1.prototype.handleValidationAttributeChange = function(attributesList) {
        var _this = this;
        attributesList.some(function(attributeName) {
            if (_constants.VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                _this.styleValidity(true);
                _this.adapter.setLabelRequired(_this.getNativeInput().required);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) this.setcharacterCounter(this.getValue().length);
    };
    /**
     * Opens/closes the notched outline.
     */ MDCTextFieldFoundation1.prototype.notchOutline = function(openNotch) {
        if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) return;
        if (openNotch) {
            var labelWidth = this.adapter.getLabelWidth() * _constants.numbers.LABEL_SCALE;
            this.adapter.notchOutline(labelWidth);
        } else this.adapter.closeOutline();
    };
    /**
     * Activates the text field focus state.
     */ MDCTextFieldFoundation1.prototype.activateFocus = function() {
        this.isFocused = true;
        this.styleFocused(this.isFocused);
        this.adapter.activateLineRipple();
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid)) this.helperText.showToScreenReader();
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */ MDCTextFieldFoundation1.prototype.setTransformOrigin = function(evt) {
        if (this.isDisabled() || this.adapter.hasOutline()) return;
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */ MDCTextFieldFoundation1.prototype.handleInput = function() {
        this.autoCompleteFocus();
        this.setcharacterCounter(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */ MDCTextFieldFoundation1.prototype.autoCompleteFocus = function() {
        if (!this.receivedUserInput) this.activateFocus();
    };
    /**
     * Deactivates the Text Field's focus state.
     */ MDCTextFieldFoundation1.prototype.deactivateFocus = function() {
        this.isFocused = false;
        this.adapter.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity(isValid);
        this.styleFocused(this.isFocused);
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            this.adapter.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) this.receivedUserInput = false;
    };
    MDCTextFieldFoundation1.prototype.getValue = function() {
        return this.getNativeInput().value;
    };
    /**
     * @param value The value to set on the input Element.
     */ MDCTextFieldFoundation1.prototype.setValue = function(value) {
        // Prevent Safari from moving the caret to the end of the input when the
        // value has not changed.
        if (this.getValue() !== value) this.getNativeInput().value = value;
        this.setcharacterCounter(value.length);
        if (this.validateOnValueChange) {
            var isValid = this.isValid();
            this.styleValidity(isValid);
        }
        if (this.adapter.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter.floatLabel(this.shouldFloat);
            this.styleFloating(this.shouldFloat);
            if (this.validateOnValueChange) this.adapter.shakeLabel(this.shouldShake);
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a
     *     native validity check.
     */ MDCTextFieldFoundation1.prototype.isValid = function() {
        return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */ MDCTextFieldFoundation1.prototype.setValid = function(isValid) {
        this.valid = isValid;
        this.styleValidity(isValid);
        var shouldShake = !isValid && !this.isFocused && !!this.getValue();
        if (this.adapter.hasLabel()) this.adapter.shakeLabel(shouldShake);
    };
    /**
     * @param shouldValidate Whether or not validity should be updated on
     *     value change.
     */ MDCTextFieldFoundation1.prototype.setValidateOnValueChange = function(shouldValidate) {
        this.validateOnValueChange = shouldValidate;
    };
    /**
     * @return Whether or not validity should be updated on value change. `true`
     *     by default.
     */ MDCTextFieldFoundation1.prototype.getValidateOnValueChange = function() {
        return this.validateOnValueChange;
    };
    /**
     * Enables or disables the use of native validation. Use this for custom
     * validation.
     * @param useNativeValidation Set this to false to ignore native input
     *     validation.
     */ MDCTextFieldFoundation1.prototype.setUseNativeValidation = function(useNativeValidation) {
        this.useNativeValidation = useNativeValidation;
    };
    MDCTextFieldFoundation1.prototype.isDisabled = function() {
        return this.getNativeInput().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */ MDCTextFieldFoundation1.prototype.setDisabled = function(disabled) {
        this.getNativeInput().disabled = disabled;
        this.styleDisabled(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */ MDCTextFieldFoundation1.prototype.setHelperTextContent = function(content) {
        if (this.helperText) this.helperText.setContent(content);
    };
    /**
     * Sets the aria label of the leading icon.
     */ MDCTextFieldFoundation1.prototype.setLeadingIconAriaLabel = function(label) {
        if (this.leadingIcon) this.leadingIcon.setAriaLabel(label);
    };
    /**
     * Sets the text content of the leading icon.
     */ MDCTextFieldFoundation1.prototype.setLeadingIconContent = function(content) {
        if (this.leadingIcon) this.leadingIcon.setContent(content);
    };
    /**
     * Sets the aria label of the trailing icon.
     */ MDCTextFieldFoundation1.prototype.setTrailingIconAriaLabel = function(label) {
        if (this.trailingIcon) this.trailingIcon.setAriaLabel(label);
    };
    /**
     * Sets the text content of the trailing icon.
     */ MDCTextFieldFoundation1.prototype.setTrailingIconContent = function(content) {
        if (this.trailingIcon) this.trailingIcon.setContent(content);
    };
    /**
     * Sets character counter values that shows characters used and the total
     * character limit.
     */ MDCTextFieldFoundation1.prototype.setcharacterCounter = function(currentLength) {
        if (!this.characterCounter) return;
        var maxLength = this.getNativeInput().maxLength;
        if (maxLength === -1) throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        this.characterCounter.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied
     *     value.
     */ MDCTextFieldFoundation1.prototype.isBadInput = function() {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */ MDCTextFieldFoundation1.prototype.isNativeInputValid = function() {
        return this.getNativeInput().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */ MDCTextFieldFoundation1.prototype.styleValidity = function(isValid) {
        var INVALID = MDCTextFieldFoundation1.cssClasses.INVALID;
        if (isValid) this.adapter.removeClass(INVALID);
        else this.adapter.addClass(INVALID);
        if (this.helperText) {
            this.helperText.setValidity(isValid);
            // We dynamically set or unset aria-describedby for validation helper text
            // only, based on whether the field is valid
            var helperTextValidation = this.helperText.isValidation();
            if (!helperTextValidation) return;
            var helperTextVisible = this.helperText.isVisible();
            var helperTextId = this.helperText.getId();
            if (helperTextVisible && helperTextId) this.adapter.setInputAttr(_constants.strings.ARIA_DESCRIBEDBY, helperTextId);
            else this.adapter.removeInputAttr(_constants.strings.ARIA_DESCRIBEDBY);
        }
    };
    /**
     * Styles the component based on the focused state.
     */ MDCTextFieldFoundation1.prototype.styleFocused = function(isFocused) {
        var FOCUSED = MDCTextFieldFoundation1.cssClasses.FOCUSED;
        if (isFocused) this.adapter.addClass(FOCUSED);
        else this.adapter.removeClass(FOCUSED);
    };
    /**
     * Styles the component based on the disabled state.
     */ MDCTextFieldFoundation1.prototype.styleDisabled = function(isDisabled) {
        var _a = MDCTextFieldFoundation1.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter.addClass(DISABLED);
            this.adapter.removeClass(INVALID);
        } else this.adapter.removeClass(DISABLED);
        if (this.leadingIcon) this.leadingIcon.setDisabled(isDisabled);
        if (this.trailingIcon) this.trailingIcon.setDisabled(isDisabled);
    };
    /**
     * Styles the component based on the label floating state.
     */ MDCTextFieldFoundation1.prototype.styleFloating = function(isFloating) {
        var LABEL_FLOATING = MDCTextFieldFoundation1.cssClasses.LABEL_FLOATING;
        if (isFloating) this.adapter.addClass(LABEL_FLOATING);
        else this.adapter.removeClass(LABEL_FLOATING);
    };
    /**
     * @return The native text input element from the host environment, or an
     *     object with the same shape for unit tests.
     */ MDCTextFieldFoundation1.prototype.getNativeInput = function() {
        // this.adapter may be undefined in foundation unit tests. This happens when
        // testdouble is creating a mock object and invokes the
        // shouldShake/shouldFloat getters (which in turn call getValue(), which
        // calls this method) before init() has been called from the MDCTextField
        // constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            required: false,
            type: 'input',
            validity: {
                badInput: false,
                valid: true
            },
            value: ''
        };
    };
    return MDCTextFieldFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCTextFieldFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"wdBr4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bX2wx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTextFieldHelperText", ()=>MDCTextFieldHelperText
);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _foundation = require("./foundation");
var MDCTextFieldHelperText = function(_super) {
    _tslib.__extends(MDCTextFieldHelperText1, _super);
    function MDCTextFieldHelperText1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldHelperText1.attachTo = function(root) {
        return new MDCTextFieldHelperText1(root);
    };
    Object.defineProperty(MDCTextFieldHelperText1.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function() {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldHelperText1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            hasClass: function(className) {
                return _this.root.classList.contains(className);
            },
            getAttr: function(attr) {
                return _this.root.getAttribute(attr);
            },
            setAttr: function(attr, value) {
                return _this.root.setAttribute(attr, value);
            },
            removeAttr: function(attr) {
                return _this.root.removeAttribute(attr);
            },
            setContent: function(content) {
                _this.root.textContent = content;
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation.MDCTextFieldHelperTextFoundation(adapter);
    };
    return MDCTextFieldHelperText1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","./foundation":"5gLP0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gLP0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTextFieldHelperTextFoundation", ()=>MDCTextFieldHelperTextFoundation
);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var MDCTextFieldHelperTextFoundation = function(_super) {
    _tslib.__extends(MDCTextFieldHelperTextFoundation1, _super);
    function MDCTextFieldHelperTextFoundation1(adapter) {
        return _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCTextFieldHelperTextFoundation1.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldHelperTextFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation1, "strings", {
        get: function() {
            return _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                hasClass: function() {
                    return false;
                },
                getAttr: function() {
                    return null;
                },
                setAttr: function() {
                    return undefined;
                },
                removeAttr: function() {
                    return undefined;
                },
                setContent: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldHelperTextFoundation1.prototype.getId = function() {
        return this.adapter.getAttr('id');
    };
    MDCTextFieldHelperTextFoundation1.prototype.isVisible = function() {
        return this.adapter.getAttr(_constants.strings.ARIA_HIDDEN) !== 'true';
    };
    /**
     * Sets the content of the helper text field.
     */ MDCTextFieldHelperTextFoundation1.prototype.setContent = function(content) {
        this.adapter.setContent(content);
    };
    MDCTextFieldHelperTextFoundation1.prototype.isPersistent = function() {
        return this.adapter.hasClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
    };
    /**
     * @param isPersistent Sets the persistency of the helper text.
     */ MDCTextFieldHelperTextFoundation1.prototype.setPersistent = function(isPersistent) {
        if (isPersistent) this.adapter.addClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
        else this.adapter.removeClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
    };
    /**
     * @return whether the helper text acts as an error validation message.
     */ MDCTextFieldHelperTextFoundation1.prototype.isValidation = function() {
        return this.adapter.hasClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */ MDCTextFieldHelperTextFoundation1.prototype.setValidation = function(isValidation) {
        if (isValidation) this.adapter.addClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        else this.adapter.removeClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
    };
    /**
     * Makes the helper text visible to the screen reader.
     */ MDCTextFieldHelperTextFoundation1.prototype.showToScreenReader = function() {
        this.adapter.removeAttr(_constants.strings.ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the input validity.
     */ MDCTextFieldHelperTextFoundation1.prototype.setValidity = function(inputIsValid) {
        var helperTextIsPersistent = this.adapter.hasClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter.hasClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
        if (validationMsgNeedsDisplay) {
            this.showToScreenReader();
            // If role is already alert, refresh it to trigger another announcement
            // from screenreader.
            if (this.adapter.getAttr(_constants.strings.ROLE) === 'alert') this.refreshAlertRole();
            else this.adapter.setAttr(_constants.strings.ROLE, 'alert');
        } else this.adapter.removeAttr(_constants.strings.ROLE);
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) this.hide();
    };
    /**
     * Hides the help text from screen readers.
     */ MDCTextFieldHelperTextFoundation1.prototype.hide = function() {
        this.adapter.setAttr(_constants.strings.ARIA_HIDDEN, 'true');
    };
    MDCTextFieldHelperTextFoundation1.prototype.refreshAlertRole = function() {
        var _this = this;
        this.adapter.removeAttr(_constants.strings.ROLE);
        requestAnimationFrame(function() {
            _this.adapter.setAttr(_constants.strings.ROLE, 'alert');
        });
    };
    return MDCTextFieldHelperTextFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCTextFieldHelperTextFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"f4O20","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4O20":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "strings", ()=>strings
);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var cssClasses = {
    HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
    ROOT: 'mdc-text-field-helper-text'
};
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
    ROOT_SELECTOR: "." + cssClasses.ROOT
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gn4Te":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTextFieldIcon", ()=>MDCTextFieldIcon
);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _foundation = require("./foundation");
var MDCTextFieldIcon = function(_super) {
    _tslib.__extends(MDCTextFieldIcon1, _super);
    function MDCTextFieldIcon1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldIcon1.attachTo = function(root) {
        return new MDCTextFieldIcon1(root);
    };
    Object.defineProperty(MDCTextFieldIcon1.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function() {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldIcon1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function(attr) {
                return _this.root.getAttribute(attr);
            },
            setAttr: function(attr, value) {
                return _this.root.setAttribute(attr, value);
            },
            removeAttr: function(attr) {
                return _this.root.removeAttribute(attr);
            },
            setContent: function(content) {
                _this.root.textContent = content;
            },
            registerInteractionHandler: function(evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function(evtType, handler) {
                return _this.unlisten(evtType, handler);
            },
            notifyIconAction: function() {
                return _this.emit(_foundation.MDCTextFieldIconFoundation.strings.ICON_EVENT, {
                } /* evtData */ , true);
            }
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation.MDCTextFieldIconFoundation(adapter);
    };
    return MDCTextFieldIcon1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","./foundation":"95gVw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"95gVw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTextFieldIconFoundation", ()=>MDCTextFieldIconFoundation
);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var INTERACTION_EVENTS = [
    'click',
    'keydown'
];
var MDCTextFieldIconFoundation = function(_super) {
    _tslib.__extends(MDCTextFieldIconFoundation1, _super);
    function MDCTextFieldIconFoundation1(adapter) {
        var _this = _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCTextFieldIconFoundation1.defaultAdapter), adapter)) || this;
        _this.savedTabIndex = null;
        _this.interactionHandler = function(evt) {
            _this.handleInteraction(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCTextFieldIconFoundation1, "strings", {
        get: function() {
            return _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation1, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function() {
                    return null;
                },
                setAttr: function() {
                    return undefined;
                },
                removeAttr: function() {
                    return undefined;
                },
                setContent: function() {
                    return undefined;
                },
                registerInteractionHandler: function() {
                    return undefined;
                },
                deregisterInteractionHandler: function() {
                    return undefined;
                },
                notifyIconAction: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldIconFoundation1.prototype.init = function() {
        var e_1, _a;
        this.savedTabIndex = this.adapter.getAttr('tabindex');
        try {
            for(var INTERACTION_EVENTS_1 = _tslib.__values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()){
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerInteractionHandler(evtType, this.interactionHandler);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_a = INTERACTION_EVENTS_1.return)) _a.call(INTERACTION_EVENTS_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    };
    MDCTextFieldIconFoundation1.prototype.destroy = function() {
        var e_2, _a;
        try {
            for(var INTERACTION_EVENTS_2 = _tslib.__values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()){
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.interactionHandler);
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_a = INTERACTION_EVENTS_2.return)) _a.call(INTERACTION_EVENTS_2);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
    };
    MDCTextFieldIconFoundation1.prototype.setDisabled = function(disabled) {
        if (!this.savedTabIndex) return;
        if (disabled) {
            this.adapter.setAttr('tabindex', '-1');
            this.adapter.removeAttr('role');
        } else {
            this.adapter.setAttr('tabindex', this.savedTabIndex);
            this.adapter.setAttr('role', _constants.strings.ICON_ROLE);
        }
    };
    MDCTextFieldIconFoundation1.prototype.setAriaLabel = function(label) {
        this.adapter.setAttr('aria-label', label);
    };
    MDCTextFieldIconFoundation1.prototype.setContent = function(content) {
        this.adapter.setContent(content);
    };
    MDCTextFieldIconFoundation1.prototype.handleInteraction = function(evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            evt.preventDefault(); // stop click from causing host label to focus
            // input
            this.adapter.notifyIconAction();
        }
    };
    return MDCTextFieldIconFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCTextFieldIconFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"aIXJG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIXJG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "strings", ()=>strings
);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var strings = {
    ICON_EVENT: 'MDCTextField:icon',
    ICON_ROLE: 'button'
};
var cssClasses = {
    ROOT: 'mdc-text-field__icon'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4SZIS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ibHT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "characterCountCssClasses", ()=>_constants.cssClasses
);
parcelHelpers.export(exports, "characterCountStrings", ()=>_constants.strings
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _adapter = require("./adapter");
parcelHelpers.exportAll(_adapter, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
var _foundation = require("./foundation");
parcelHelpers.exportAll(_foundation, exports);
var _constants = require("./constants");

},{"./adapter":"3byYj","./component":"hwtce","./foundation":"dpux4","./constants":"1cPx3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3byYj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j9yda":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "helperTextCssClasses", ()=>_constants.cssClasses
);
parcelHelpers.export(exports, "helperTextStrings", ()=>_constants.strings
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _adapter = require("./adapter");
parcelHelpers.exportAll(_adapter, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
var _foundation = require("./foundation");
parcelHelpers.exportAll(_foundation, exports);
var _constants = require("./constants");

},{"./adapter":"hl5sa","./component":"bX2wx","./foundation":"5gLP0","./constants":"f4O20","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hl5sa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82Zgi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "iconCssClasses", ()=>_constants.cssClasses
);
parcelHelpers.export(exports, "iconStrings", ()=>_constants.strings
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _adapter = require("./adapter");
parcelHelpers.exportAll(_adapter, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
var _foundation = require("./foundation");
parcelHelpers.exportAll(_foundation, exports);
var _constants = require("./constants");

},{"./adapter":"43CWW","./component":"gn4Te","./foundation":"95gVw","./constants":"aIXJG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"43CWW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fslB5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "util", ()=>_util
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _util = require("./util");
var _adapter = require("./adapter");
parcelHelpers.exportAll(_adapter, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _foundation = require("./dismissible/foundation");
parcelHelpers.exportAll(_foundation, exports);
var _foundation1 = require("./modal/foundation");
parcelHelpers.exportAll(_foundation1, exports);

},{"./util":"dv6Ki","./adapter":"9XqeF","./component":"7kYkN","./constants":"eSuEA","./dismissible/foundation":"bL1su","./modal/foundation":"kPFK0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dv6Ki":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ parcelHelpers.export(exports, "createFocusTrapInstance", ()=>createFocusTrapInstance
);
function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
    return focusTrapFactory(surfaceEl, {
        // Component handles focusing on active nav item.
        skipInitialFocus: true
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9XqeF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kYkN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCDrawer", ()=>MDCDrawer
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _component = require("@material/base/component");
var _focusTrap = require("@material/dom/focus-trap");
var _component1 = require("@material/list/component");
var _foundation = require("./dismissible/foundation");
var _foundation1 = require("./modal/foundation");
var _util = require("./util");
var cssClasses = _foundation.MDCDismissibleDrawerFoundation.cssClasses, strings = _foundation.MDCDismissibleDrawerFoundation.strings;
/**
 * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
 * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
 */ var MDCDrawer = function(_super) {
    _tslib.__extends(MDCDrawer1, _super);
    function MDCDrawer1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCDrawer1.attachTo = function(root) {
        return new MDCDrawer1(root);
    };
    Object.defineProperty(MDCDrawer1.prototype, "open", {
        /**
         * @return boolean Proxies to the foundation's `open`/`close` methods.
         * Also returns true if drawer is in the open position.
         */ get: function() {
            return this.foundation.isOpen();
        },
        /**
         * Toggles the drawer open and closed.
         */ set: function(isOpen) {
            if (isOpen) this.foundation.open();
            else this.foundation.close();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDrawer1.prototype, "list", {
        // initialSyncWithDOM()
        get: function() {
            return this.innerList;
        },
        enumerable: false,
        configurable: true
    });
    MDCDrawer1.prototype.initialize = function(focusTrapFactory, listFactory) {
        if (focusTrapFactory === void 0) focusTrapFactory = function(el) {
            return new _focusTrap.FocusTrap(el);
        };
        if (listFactory === void 0) listFactory = function(el) {
            return new _component1.MDCList(el);
        };
        var listEl = this.root.querySelector(strings.LIST_SELECTOR);
        if (listEl) {
            this.innerList = listFactory(listEl);
            this.innerList.wrapFocus = true;
        }
        this.focusTrapFactory = focusTrapFactory;
    };
    MDCDrawer1.prototype.initialSyncWithDOM = function() {
        var _this = this;
        var MODAL = cssClasses.MODAL;
        var SCRIM_SELECTOR = strings.SCRIM_SELECTOR;
        this.scrim = this.root.parentNode.querySelector(SCRIM_SELECTOR);
        if (this.scrim && this.root.classList.contains(MODAL)) {
            this.handleScrimClick = function() {
                return _this.foundation.handleScrimClick();
            };
            this.scrim.addEventListener('click', this.handleScrimClick);
            this.focusTrap = _util.createFocusTrapInstance(this.root, this.focusTrapFactory);
        }
        this.handleKeydown = function(evt) {
            _this.foundation.handleKeydown(evt);
        };
        this.handleTransitionEnd = function(evt) {
            _this.foundation.handleTransitionEnd(evt);
        };
        this.listen('keydown', this.handleKeydown);
        this.listen('transitionend', this.handleTransitionEnd);
    };
    MDCDrawer1.prototype.destroy = function() {
        this.unlisten('keydown', this.handleKeydown);
        this.unlisten('transitionend', this.handleTransitionEnd);
        if (this.innerList) this.innerList.destroy();
        var MODAL = cssClasses.MODAL;
        if (this.scrim && this.handleScrimClick && this.root.classList.contains(MODAL)) {
            this.scrim.removeEventListener('click', this.handleScrimClick);
            // Ensure drawer is closed to hide scrim and release focus
            this.open = false;
        }
    };
    MDCDrawer1.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function(className) {
                _this.root.classList.add(className);
            },
            removeClass: function(className) {
                _this.root.classList.remove(className);
            },
            hasClass: function(className) {
                return _this.root.classList.contains(className);
            },
            elementHasClass: function(element, className) {
                return element.classList.contains(className);
            },
            saveFocus: function() {
                _this.previousFocus = document.activeElement;
            },
            restoreFocus: function() {
                var previousFocus = _this.previousFocus;
                if (previousFocus && previousFocus.focus && _this.root.contains(document.activeElement)) previousFocus.focus();
            },
            focusActiveNavigationItem: function() {
                var activeNavItemEl = _this.root.querySelector(strings.LIST_ITEM_ACTIVATED_SELECTOR);
                if (activeNavItemEl) activeNavItemEl.focus();
            },
            notifyClose: function() {
                _this.emit(strings.CLOSE_EVENT, {
                }, true);
            },
            notifyOpen: function() {
                _this.emit(strings.OPEN_EVENT, {
                }, true);
            },
            trapFocus: function() {
                _this.focusTrap.trapFocus();
            },
            releaseFocus: function() {
                _this.focusTrap.releaseFocus();
            }
        };
        // tslint:enable:object-literal-sort-keys
        var DISMISSIBLE = cssClasses.DISMISSIBLE, MODAL = cssClasses.MODAL;
        if (this.root.classList.contains(DISMISSIBLE)) return new _foundation.MDCDismissibleDrawerFoundation(adapter);
        else if (this.root.classList.contains(MODAL)) return new _foundation1.MDCModalDrawerFoundation(adapter);
        else throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
    };
    return MDCDrawer1;
}(_component.MDCComponent);

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/dom/focus-trap":"6ufPw","@material/list/component":"iRqEa","./dismissible/foundation":"bL1su","./modal/foundation":"kPFK0","./util":"dv6Ki","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ufPw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FocusTrap", ()=>FocusTrap
);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */ var FocusTrap = function() {
    function FocusTrap1(root, options) {
        if (options === void 0) options = {
        };
        this.root = root;
        this.options = options;
        // Previously focused element before trapping focus.
        this.elFocusedBeforeTrapFocus = null;
    }
    /**
     * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
     * otherwises sets initial focus to the first focusable child element.
     */ FocusTrap1.prototype.trapFocus = function() {
        var focusableEls = this.getFocusableElements(this.root);
        if (focusableEls.length === 0) throw new Error('FocusTrap: Element must have at least one focusable child.');
        this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        this.wrapTabFocus(this.root);
        if (!this.options.skipInitialFocus) this.focusInitialElement(focusableEls, this.options.initialFocusEl);
    };
    /**
     * Releases focus from `root`. Also restores focus to the previously focused
     * element.
     */ FocusTrap1.prototype.releaseFocus = function() {
        [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS)).forEach(function(sentinelEl) {
            sentinelEl.parentElement.removeChild(sentinelEl);
        });
        if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) this.elFocusedBeforeTrapFocus.focus();
    };
    /**
     * Wraps tab focus within `el` by adding two hidden sentinel divs which are
     * used to mark the beginning and the end of the tabbable region. When
     * focused, these sentinel elements redirect focus to the first/last
     * children elements of the tabbable region, ensuring that focus is trapped
     * within that region.
     */ FocusTrap1.prototype.wrapTabFocus = function(el) {
        var _this = this;
        var sentinelStart = this.createSentinel();
        var sentinelEnd = this.createSentinel();
        sentinelStart.addEventListener('focus', function() {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) focusableEls[focusableEls.length - 1].focus();
        });
        sentinelEnd.addEventListener('focus', function() {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) focusableEls[0].focus();
        });
        el.insertBefore(sentinelStart, el.children[0]);
        el.appendChild(sentinelEnd);
    };
    /**
     * Focuses on `initialFocusEl` if defined and a child of the root element.
     * Otherwise, focuses on the first focusable child element of the root.
     */ FocusTrap1.prototype.focusInitialElement = function(focusableEls, initialFocusEl) {
        var focusIndex = 0;
        if (initialFocusEl) focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
        focusableEls[focusIndex].focus();
    };
    FocusTrap1.prototype.getFocusableElements = function(root) {
        var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
        return focusableEls.filter(function(el) {
            var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' || el.getAttribute('disabled') != null || el.getAttribute('hidden') != null || el.getAttribute('aria-hidden') === 'true';
            var isTabbableAndVisible = el.tabIndex >= 0 && el.getBoundingClientRect().width > 0 && !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
            var isProgrammaticallyHidden = false;
            if (isTabbableAndVisible) {
                var style = getComputedStyle(el);
                isProgrammaticallyHidden = style.display === 'none' || style.visibility === 'hidden';
            }
            return isTabbableAndVisible && !isProgrammaticallyHidden;
        });
    };
    FocusTrap1.prototype.createSentinel = function() {
        var sentinel = document.createElement('div');
        sentinel.setAttribute('tabindex', '0');
        // Don't announce in screen readers.
        sentinel.setAttribute('aria-hidden', 'true');
        sentinel.classList.add(FOCUS_SENTINEL_CLASS);
        return sentinel;
    };
    return FocusTrap1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bL1su":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCDismissibleDrawerFoundation", ()=>MDCDismissibleDrawerFoundation
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("../constants");
var MDCDismissibleDrawerFoundation = function(_super) {
    _tslib.__extends(MDCDismissibleDrawerFoundation1, _super);
    function MDCDismissibleDrawerFoundation1(adapter) {
        var _this = _super.call(this, _tslib.__assign(_tslib.__assign({
        }, MDCDismissibleDrawerFoundation1.defaultAdapter), adapter)) || this;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        return _this;
    }
    Object.defineProperty(MDCDismissibleDrawerFoundation1, "strings", {
        get: function() {
            return _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation1, "cssClasses", {
        get: function() {
            return _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation1, "defaultAdapter", {
        get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                hasClass: function() {
                    return false;
                },
                elementHasClass: function() {
                    return false;
                },
                notifyClose: function() {
                    return undefined;
                },
                notifyOpen: function() {
                    return undefined;
                },
                saveFocus: function() {
                    return undefined;
                },
                restoreFocus: function() {
                    return undefined;
                },
                focusActiveNavigationItem: function() {
                    return undefined;
                },
                trapFocus: function() {
                    return undefined;
                },
                releaseFocus: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCDismissibleDrawerFoundation1.prototype.destroy = function() {
        if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
        if (this.animationTimer) clearTimeout(this.animationTimer);
    };
    /**
     * Opens the drawer from the closed state.
     */ MDCDismissibleDrawerFoundation1.prototype.open = function() {
        var _this = this;
        if (this.isOpen() || this.isOpening() || this.isClosing()) return;
        this.adapter.addClass(_constants.cssClasses.OPEN);
        this.adapter.addClass(_constants.cssClasses.ANIMATE);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame(function() {
            _this.adapter.addClass(_constants.cssClasses.OPENING);
        });
        this.adapter.saveFocus();
    };
    /**
     * Closes the drawer from the open state.
     */ MDCDismissibleDrawerFoundation1.prototype.close = function() {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) return;
        this.adapter.addClass(_constants.cssClasses.CLOSING);
    };
    /**
     * Returns true if the drawer is in the open position.
     * @return true if drawer is in open state.
     */ MDCDismissibleDrawerFoundation1.prototype.isOpen = function() {
        return this.adapter.hasClass(_constants.cssClasses.OPEN);
    };
    /**
     * Returns true if the drawer is animating open.
     * @return true if drawer is animating open.
     */ MDCDismissibleDrawerFoundation1.prototype.isOpening = function() {
        return this.adapter.hasClass(_constants.cssClasses.OPENING) || this.adapter.hasClass(_constants.cssClasses.ANIMATE);
    };
    /**
     * Returns true if the drawer is animating closed.
     * @return true if drawer is animating closed.
     */ MDCDismissibleDrawerFoundation1.prototype.isClosing = function() {
        return this.adapter.hasClass(_constants.cssClasses.CLOSING);
    };
    /**
     * Keydown handler to close drawer when key is escape.
     */ MDCDismissibleDrawerFoundation1.prototype.handleKeydown = function(evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) this.close();
    };
    /**
     * Handles the `transitionend` event when the drawer finishes opening/closing.
     */ MDCDismissibleDrawerFoundation1.prototype.handleTransitionEnd = function(evt) {
        var OPENING = _constants.cssClasses.OPENING, CLOSING = _constants.cssClasses.CLOSING, OPEN = _constants.cssClasses.OPEN, ANIMATE = _constants.cssClasses.ANIMATE, ROOT = _constants.cssClasses.ROOT;
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
        var isRootElement = this.isElement(evt.target) && this.adapter.elementHasClass(evt.target, ROOT);
        if (!isRootElement) return;
        if (this.isClosing()) {
            this.adapter.removeClass(OPEN);
            this.closed();
            this.adapter.restoreFocus();
            this.adapter.notifyClose();
        } else {
            this.adapter.focusActiveNavigationItem();
            this.opened();
            this.adapter.notifyOpen();
        }
        this.adapter.removeClass(ANIMATE);
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(CLOSING);
    };
    /**
     * Extension point for when drawer finishes open animation.
     */ MDCDismissibleDrawerFoundation1.prototype.opened = function() {
    }; // tslint:disable-line:no-empty
    /**
     * Extension point for when drawer finishes close animation.
     */ MDCDismissibleDrawerFoundation1.prototype.closed = function() {
    }; // tslint:disable-line:no-empty
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */ MDCDismissibleDrawerFoundation1.prototype.runNextAnimationFrame = function(callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function() {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    MDCDismissibleDrawerFoundation1.prototype.isElement = function(element) {
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
        return Boolean(element.classList);
    };
    return MDCDismissibleDrawerFoundation1;
}(_foundation.MDCFoundation);
exports.default = MDCDismissibleDrawerFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","../constants":"eSuEA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eSuEA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses
);
parcelHelpers.export(exports, "strings", ()=>strings
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var cssClasses = {
    ANIMATE: 'mdc-drawer--animate',
    CLOSING: 'mdc-drawer--closing',
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open',
    OPENING: 'mdc-drawer--opening',
    ROOT: 'mdc-drawer'
};
var strings = {
    APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
    CLOSE_EVENT: 'MDCDrawer:closed',
    OPEN_EVENT: 'MDCDrawer:opened',
    SCRIM_SELECTOR: '.mdc-drawer-scrim',
    LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
    LIST_ITEM_ACTIVATED_SELECTOR: '.mdc-list-item--activated,.mdc-deprecated-list-item--activated'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPFK0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCModalDrawerFoundation", ()=>MDCModalDrawerFoundation
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var _tslib = require("tslib");
var _foundation = require("../dismissible/foundation");
/* istanbul ignore next: subclass is not a branch statement */ var MDCModalDrawerFoundation = function(_super) {
    _tslib.__extends(MDCModalDrawerFoundation1, _super);
    function MDCModalDrawerFoundation1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles click event on scrim.
     */ MDCModalDrawerFoundation1.prototype.handleScrimClick = function() {
        this.close();
    };
    /**
     * Called when drawer finishes open animation.
     */ MDCModalDrawerFoundation1.prototype.opened = function() {
        this.adapter.trapFocus();
    };
    /**
     * Called when drawer finishes close animation.
     */ MDCModalDrawerFoundation1.prototype.closed = function() {
        this.adapter.releaseFocus();
    };
    return MDCModalDrawerFoundation1;
}(_foundation.MDCDismissibleDrawerFoundation);
exports.default = MDCModalDrawerFoundation;

},{"tslib":"lRdW5","../dismissible/foundation":"bL1su","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequire2f3a")

//# sourceMappingURL=index.975ef6c8.js.map
