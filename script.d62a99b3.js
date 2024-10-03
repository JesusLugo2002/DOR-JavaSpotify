parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pKdB":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function r(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(e){var r=n(e,"string");return"symbol"==t(r)?r:r+""}function n(e,r){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,r||"default");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.playSong=l;var u=exports.default=r(function t(e,r,o){i(this,t),this.element=document.querySelector(e),this.audio=new Audio(r),this.album=document.querySelector(o),this.vinyl=this.element.querySelector(".vinyl")});function l(t){t.element.onclick=function(){t.audio.paused?(t.vinyl.style.transform="translate(-40%, 0)",t.audio.play()):(t.vinyl.style.transform="translate(-100%, 0)",t.audio.pause())}}
},{}],"ERFn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./Song.js"));function r(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(r=function(t){return t?n:e})(t)}function e(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=r(e);if(n&&n.has(t))return n.get(t);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&{}.hasOwnProperty.call(t,u)){var a=i?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(o,u,a):o[u]=t[u]}return o.default=t,n&&n.set(t,o),o}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,r){return f(t)||l(t,r)||u(t,r)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,r){if(t){if("string"==typeof t)return a(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function l(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,a=[],l=!0,f=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(a.push(n.value),a.length!==r);l=!0);}catch(t){f=!0,o=t}finally{try{if(!l&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(f)throw o}}return a}}function f(t){if(Array.isArray(t))return t}function c(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function y(t,r,e){return r&&c(t.prototype,r),e&&c(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var r=s(t,"string");return"symbol"==n(r)?r:r+""}function s(t,r){if("object"!=n(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,r||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function b(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}var v=exports.default=y(function r(e){b(this,r);for(var n=1,i=0,u=Object.entries(e);i<u.length;i++){var a=o(u[i],2),l=a[0],f=a[1],c="#cv".concat(n++),y=new t.default(l,f,c);(0,t.playSong)(y)}});
},{"./Song.js":"pKdB"}],"DEhP":[function(require,module,exports) {
module.exports="/DOR-JavaSpotify/song1.10131426.mp3";
},{}],"duI9":[function(require,module,exports) {
module.exports="/DOR-JavaSpotify/song2.1ab20a7f.mp3";
},{}],"lBIj":[function(require,module,exports) {
module.exports="/DOR-JavaSpotify/song3.e17266c0.mp3";
},{}],"NLqZ":[function(require,module,exports) {
module.exports={song1:require("./song1.mp3"),song2:require("./song2.mp3"),song3:require("./song3.mp3")};
},{"./song1.mp3":"DEhP","./song2.mp3":"duI9","./song3.mp3":"lBIj"}],"L4bL":[function(require,module,exports) {
"use strict";var e=t(require("./Player.js")),r=t(require("../assets/songs/*.mp3"));function t(e){return e&&e.__esModule?e:{default:e}}for(var a={},s=1,u=0,l=Object.keys(r.default);u<l.length;u++){var n=l[u];a[".item-".concat(s++)]=r.default[n]}var f=new e.default(a);
},{"./Player.js":"ERFn","../assets/songs/*.mp3":"NLqZ"}]},{},["L4bL"], null)
//# sourceMappingURL=/DOR-JavaSpotify/script.d62a99b3.js.map