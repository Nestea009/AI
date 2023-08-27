// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var click_var = false;
document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('example');
  button.addEventListener('click', clicked);
});
document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('AI_button');
  button.addEventListener('click', ConsoleIt);
});
document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('BuyHouse');
  button.addEventListener('click', ConsoleIt2);
});
function ConsoleIt() {
  console.log("Clicked!");
}
function ConsoleIt2() {
  console.log("Bought the House");
}
function clicked() {
  money += 1;
  click_var = true;
  Algorithm(money);
}
var money = 0;
function Algorithm(money) {
  //If the output1 value of the AI is avobe 2 and below 4
  //make the AI click the button for a reward

  function ButtonClick(value) {
    var Reward = 0;
    var button = document.getElementById('AI_button');
    var clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": false
    });
    button.dispatchEvent(clickEvent);
    if (value < 3) {
      Reward += 1 / (3 - value);
    } else {
      Reward += 1 / (value - 3);
    }
    return Reward;
  }
  function ButtonClick2(value) {
    var Reward = 0;
    var button = document.getElementById('BuyHouse');
    var clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": false
    });
    button.dispatchEvent(clickEvent);
    //Reward -= 10;   THIS FUCKS UP THE FIRST REWARD
    //BECAUSE GOOD OUTPUT1 VALUES ARE OVERSHADOWED BY BAD 
    //OUTPUT2 VALUES
    return Reward;
  }

  //Generate some random weights

  var weights = [Math.random(), Math.random(), Math.random(), Math.random()];
  var biasses = [Math.random(), Math.random(), Math.random(), Math.random()];
  var weights2 = [Math.random(), Math.random(), Math.random(), Math.random()];
  var biasses2 = [Math.random(), Math.random(), Math.random(), Math.random()];

  //Start an AI protorype that gets set weights and mutates them a bit

  //We create 2 different creativities, one for biasses and the other one for weights

  var creativity = 2.5;
  var creativity_weight = 2.5;

  //Run our prototype twice and compare the results
  //The best one survives and the cycle repeats

  for (var i = 0; i < 10000; i++) {
    var _AI_prototype = AI_prototype(weights, biasses, weights2, biasses2, creativity, creativity_weight),
      _AI_prototype2 = _slicedToArray(_AI_prototype, 5),
      new_weights = _AI_prototype2[0],
      new_biasses = _AI_prototype2[1],
      new_weights2 = _AI_prototype2[2],
      new_biasses2 = _AI_prototype2[3],
      new_reward = _AI_prototype2[4];
    var _AI_prototype3 = AI_prototype(weights, biasses, weights2, biasses2, creativity, creativity_weight),
      _AI_prototype4 = _slicedToArray(_AI_prototype3, 5),
      new_weightsN = _AI_prototype4[0],
      new_biassesN = _AI_prototype4[1],
      new_weights2N = _AI_prototype4[2],
      new_biasses2N = _AI_prototype4[3],
      new_rewardN = _AI_prototype4[4];
    var _AI_prototype5 = AI_prototype(weights, biasses, weights2, biasses2, creativity, creativity_weight),
      _AI_prototype6 = _slicedToArray(_AI_prototype5, 5),
      new_weightsM = _AI_prototype6[0],
      new_biassesM = _AI_prototype6[1],
      new_weights2M = _AI_prototype6[2],
      new_biasses2M = _AI_prototype6[3],
      new_rewardM = _AI_prototype6[4];
    if (new_reward > new_rewardN && new_reward > new_rewardM) {
      weights = new_weights;
      biasses = new_biasses;
      weights2 = new_weights2;
      biasses2 = new_biasses2;
      console.log("First one is better");
    } else if (new_rewardN > new_reward && new_rewardN > new_rewardM) {
      weights = new_weightsN;
      biasses = new_biassesN;
      weights2 = new_weights2N;
      biasses2 = new_biasses2N;
      console.log("Second one is better");
    } else if (new_rewardM > new_reward && new_rewardM > new_rewardN) {
      weights = new_weightsM;
      biasses = new_biassesM;
      weights2 = new_weights2M;
      biasses2 = new_biasses2M;
      console.log("Third one is better");
    } else {
      console.log("Rewards are the same, should choose randomly");
    }
    if (creativity > 1.1) {
      creativity -= 0.002;
    }
  }
  function AI_prototype(weights, biasses, weights2, biasses2, creativity, creativity_weight) {
    //Start off with the money input and the CanYouBuyAHouse input

    var node1 = 1;
    var node2 = 1;
    var reward = 0;

    //Creativity will determine how much we change the weights and biasses

    //We create new weights based on creativity and the default weights

    weights = [weights[0] * (Math.random() * creativity_weight), weights[1] * (Math.random() * creativity_weight), weights[2] * (Math.random() * creativity_weight), weights[3] * (Math.random() * creativity_weight)];
    biasses = [biasses[0] * (Math.random() * creativity), biasses[1] * (Math.random() * creativity), biasses[2] * (Math.random() * creativity), biasses[3] * (Math.random() * creativity)];

    //We make the hidden nodes

    var hidden1 = node1 * weights[0] + biasses[0] + (node2 * weights[1] + biasses[1]);
    var hidden2 = node1 * weights[3] + biasses[3] + (node2 * weights[2] + biasses[2]);

    //We create new weights based on creativity and the previous weights

    weights2 = [weights2[0] * (Math.random() * creativity_weight), weights2[1] * (Math.random() * creativity_weight), weights2[2] * (Math.random() * creativity_weight), weights2[3] * (Math.random() * creativity_weight)];
    biasses2 = [biasses2[0] * (Math.random() * creativity), biasses2[1] * (Math.random() * creativity), biasses2[2] * (Math.random() * creativity), biasses2[3] * (Math.random() * creativity)];

    //We make the output nodes

    var output1 = hidden1 * weights2[0] + biasses2[0] + (hidden2 * weights2[1] + biasses2[1]);
    var output2 = hidden1 * weights2[2] + biasses2[2] + (hidden2 * weights2[3] + biasses2[3]);
    var outputLayer = [output1, output2];
    console.log(outputLayer);

    //Reward the AI if it clicks the button or if it would buy the house when it needs to

    //If clicks the button:
    if (output1 > 3) {
      if (output1 < 4 && output1 > 2) {
        reward += ButtonClick(output1);
      }
    } else {
      //reward += (1 / (3 - output1))
    }

    //If buys the house
    if (output2 > 10) {
      reward += ButtonClick2(output2);
    }

    //We return all of the values below, so that the new AI will take them as default

    return [weights, biasses, weights2, biasses2, reward];
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50853" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map