parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.modalSet=void 0;var e=function(){document.querySelector(".submit-button");var e=document.querySelector(".modal");e.style.cssText="\ndisplay: flex;\nvisibility: hidden;\nopacity: 0;\ntransition: opacity 300ms easy-in-out;\n";e.addEventListener("click",function(){e.style.visibility="visible",e.style.opacity="1",event.preventDefault()}),e.addEventListener("click",function(t){var i=t.target;(i===e||i.closest(".modal-main__close")||i.closest(".modal-main__btn-close"))&&(e.style.opacity="0",setTimeout(function(){e.style.visibility="hidden"},300))})};exports.modalSet=e,e();
},{}],"JXHT":[function(require,module,exports) {
"use strict";var u=require("./modal"),F=function(){var u=document.querySelector("input");u.addEventListener("input",D);var F=/^(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])+(\.(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])+)*)|("(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+"))@(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])+\.)+(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF]){2,})$/i;function D(){var D;D=u.value,F.test(D)?u.style.borderColor="green":u.style.borderColor="red"}u.addEventListener("input",D)};F();
},{"./modal":"RSqK"}]},{},["JXHT"], null)