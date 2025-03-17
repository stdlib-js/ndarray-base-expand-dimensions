// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).expandDimensions=e()}(this,(function(){"use strict";var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=p.call(t,m,"$1e"),t=p.call(t,v,"e"),t=p.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,h,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,b,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var S=String.fromCharCode,E=Array.isArray;function O(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,u,f,l,s,p,g,h,d;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+j(d):j(d)+p)),u+=n.arg||"",f+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,o;for(t=[],o=0,n=T.exec(r);n;)(e=r.slice(o,T.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),o=T.lastIndex,n=T.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var A,P=Object.prototype,F=P.toString,C=P.__defineGetter__,N=P.__defineSetter__,R=P.__lookupGetter__,$=P.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var L=A;function B(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&Y.call(r,e)}var U="function"==typeof Symbol?Symbol:void 0,D="function"==typeof U?U.toStringTag:"";var H=W()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[D],e=Z(r,D);try{r[D]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[D]=t:delete r[D],n}:function(r){return X.call(r)},z=Boolean,q=Boolean.prototype.toString;var J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function Q(r){return G(r)||K(r)}B(Q,"isPrimitive",G),B(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!G(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr,fr=/^\s*function\s*([^(]*)/i;B(ur,"REGEXP",fr),cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var lr=cr;function sr(r){return null!==r&&"object"==typeof r}var pr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(sr);function gr(r){var e,t,n,o;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return sr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}B(sr,"isObjectLikeArray",pr);var hr="function"==typeof r||"object"==typeof ar||"function"==typeof ir?function(r){return gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e};var dr,br=(dr=Object.assign,"function"===hr(dr)),yr=Object.assign;function vr(r){return Object.keys(Object(r))}var mr,wr=void 0!==Object.keys;function jr(r){return"[object Arguments]"===H(r)}mr=function(){return jr(arguments)}();var Sr=mr;function Er(r){return"string"==typeof r}var Or=String.prototype.valueOf;var _r=W();function xr(r){return"object"==typeof r&&(r instanceof String||(_r?function(r){try{return Or.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function Tr(r){return Er(r)||xr(r)}function kr(r){return"number"==typeof r}B(Tr,"isPrimitive",Er),B(Tr,"isObject",xr);var Ir=Number,Vr=Ir.prototype.toString;var Ar=W();function Pr(r){return"object"==typeof r&&(r instanceof Ir||(Ar?function(r){try{return Vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function Fr(r){return kr(r)||Pr(r)}function Cr(r){return r!=r}function Nr(r){return kr(r)&&Cr(r)}function Rr(r){return Pr(r)&&Cr(r.valueOf())}function $r(r){return Nr(r)||Rr(r)}B(Fr,"isPrimitive",kr),B(Fr,"isObject",Pr),B($r,"isPrimitive",Nr),B($r,"isObject",Rr);var Lr=Number.POSITIVE_INFINITY,Br=Ir.NEGATIVE_INFINITY,Gr=Math.floor;function Mr(r){return Gr(r)===r}function Wr(r){return r<Lr&&r>Br&&Mr(r)}function Xr(r){return kr(r)&&Wr(r)}function Yr(r){return Pr(r)&&Wr(r.valueOf())}function Zr(r){return Xr(r)||Yr(r)}B(Zr,"isPrimitive",Xr),B(Zr,"isObject",Yr);var Ur=Object.prototype.propertyIsEnumerable;var Dr=!Ur.call("beep","0");function Hr(r,e){var t;return null!=r&&(!(t=Ur.call(r,e))&&Dr&&Tr(r)?!Nr(e=+e)&&Xr(e)&&e>=0&&e<r.length:t)}var zr;zr=Sr?jr:function(r){return null!==r&&"object"==typeof r&&!lr(r)&&"number"==typeof r.length&&Mr(r.length)&&r.length>=0&&r.length<=4294967295&&Z(r,"callee")&&!Hr(r,"callee")};var qr=zr,Jr=Array.prototype.slice;var Kr=Hr((function(){}),"prototype"),Qr=!Hr({toString:null},"toString"),re=9007199254740991;function ee(r,e,t){var n,o;if(!function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Mr(r.length)&&r.length>=0&&r.length<=re}(r)&&!Er(r))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Xr(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if($r(e)){for(;o<n;o++)if($r(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function te(r){return r.constructor&&r.constructor.prototype===r}var ne=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],oe="undefined"==typeof window?void 0:window;var ie=function(){var r;if("undefined"===hr(oe))return!1;for(r in oe)try{-1===ee(ne,r)&&Z(oe,r)&&null!==oe[r]&&"object"===hr(oe[r])&&te(oe[r])}catch(r){return!0}return!1}(),ae="undefined"!=typeof window;var ue,ce=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ue=wr?function(){return 2!==(vr(arguments)||"").length}(1,2)?function(r){return qr(r)?vr(Jr.call(r)):vr(r)}:vr:function(r){var e,t,n,o,i,a,u;if(o=[],qr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!Z(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!sr(r))return o;t=Kr&&n}for(i in r)t&&"prototype"===i||!Z(r,i)||o.push(String(i));if(Qr)for(e=function(r){if(!1===ae&&!ie)return te(r);try{return te(r)}catch(r){return!1}}(r),u=0;u<ce.length;u++)a=ce[u],e&&"constructor"===a||!Z(r,a)||o.push(String(a));return o};var fe,le=ue,se=void 0!==Object.getOwnPropertySymbols,pe=Object,ge=pe.getOwnPropertySymbols;fe=se?function(r){return ge(pe(r))}:function(){return[]};var he,de=fe;function be(r){var e,t,n;for(e=le(r),t=de(r),n=0;n<t.length;n++)Hr(r,t[n])&&e.push(t[n]);return e}he=br?yr:function(r){var e,t,n,o,i,a,u;if(null==r)throw new TypeError(V("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(i=pe(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(o=(t=be(pe(e))).length,u=0;u<o;u++)i[n=t[u]]=e[n];return i};var ye=he;function ve(r,e){return function(r,e){var t=r.flags;return"object"!=typeof t||null===t?{}:e?ye({},t):t}(r,!1)[e]}function me(r){return r.dtype}function we(r){var e,t,n;for(t=r.length,e=[],n=0;n<t;n++)e.push(r[n]);return e}function je(r,e){return"column-major"===e?function(r){var e,t,n;for(e=[],t=1,n=0;n<r.length;n++)e.push(t),t*=r[n];return e}(r):function(r){var e,t,n,o;for(e=r.length,t=[],o=0;o<e;o++)t.push(0);for(n=1,o=e-1;o>=0;o--)t[o]=n,n*=r[o];return t}(r)}B(je,"assign",(function(r,e,t){return"column-major"===e?function(r,e){var t,n;for(t=1,n=0;n<r.length;n++)e[n]=t,t*=r[n];return e}(r,t):function(r,e){var t,n;for(t=1,n=r.length-1;n>=0;n--)e[n]=t,t*=r[n];return e}(r,t)}));var Se="row-major";function Ee(r){var e,t,n;return"number"==typeof(n=r.offset)?n:0===(t=r.shape).length||"object"!=typeof(e=r.strides)||null===e?0:function(r,e){var t,n,o;for(n=r.length,t=0,o=0;o<n;o++)e[o]<0&&(t-=e[o]*(r[o]-1));return t}(t,e)}function Oe(r){return Math.abs(r)}var _e="row-major",xe="column-major";function Te(r){var e,t;return"string"==typeof(t=r.order)?t:"object"!=typeof(e=r.strides)||null===e?_e:(t=function(r){var e,t,n,o,i,a;if(0===(t=r.length))return 0;for(e=!0,n=!0,o=Oe(r[0]),a=1;a<t;a++){if(i=Oe(r[a]),e&&i<o?e=!1:n&&i>o&&(n=!1),!n&&!e)return 0;o=i}return n&&e?3:n?1:2}(e),1===t||3===t?_e:2===t?xe:0===r.shape.length?_e:null)}function ke(r){return r.data}return function(r,e){var t,n,o,i,a,u,c,f,l,s,p;if(a=function(r,e){var t=r.shape;return e?we(t):t}(r,!1),u=function(r,e){var t,n,o;return"object"!=typeof(o=r.strides)||null===o?0===(n=r.shape).length?[0]:("string"!=typeof(t=r.order)&&(t=Se),je(n,t)):e?we(o):o}(r,!1),i=Te(r),o="row-major"===i,f=a.length,t=[],n=[],p=f,-1===(c=(s=e)<0?(s+=p+1)<0?-1:s:s>p?-1:s))throw new RangeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("invalid argument. Specified axis is out-of-bounds. Must be on the interval: [-%u, %u]. Value: `%d`.",f+1,f,e));if(0===c)for(n.push(1),o?t.push(a[0]*u[0]):t.push(u[0]),l=0;l<f;l++)n.push(a[l]),t.push(u[l]);else if(c===f){for(l=0;l<f;l++)n.push(a[l]),t.push(u[l]);n.push(1),o?t.push(u[f-1]):t.push(a[f-1]*u[f-1])}else for(l=0;l<f+1;l++)l===c?(n.push(1),o?t.push(u[l-1]):t.push(u[l])):l<c?(n.push(a[l]),t.push(u[l])):(n.push(a[l-1]),t.push(u[l-1]));return!0===ve(r,"READONLY")?new r.constructor(me(r),ke(r),n,t,Ee(r),i,{readonly:!0}):new r.constructor(me(r),ke(r),n,t,Ee(r),i)}}));
//# sourceMappingURL=index.js.map
