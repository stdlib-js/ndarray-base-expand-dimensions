"use strict";var g=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var d=g(function(D,l){
var c=require('@stdlib/ndarray-base-assert-is-read-only/dist'),h=require('@stdlib/ndarray-base-dtype/dist'),q=require('@stdlib/ndarray-base-shape/dist'),w=require('@stdlib/ndarray-base-strides/dist'),p=require('@stdlib/ndarray-base-offset/dist'),m=require('@stdlib/ndarray-base-order/dist'),f=require('@stdlib/ndarray-base-data-buffer/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function b(u,r){var t,i,o,n,a,s,e;if(n=q(u,!1),a=w(u,!1),o=m(u),s=n.length,t=[],i=[],r<0){if(r<-s-1)throw new RangeError(v('0if5H',s,s,r));r+=s+1}else if(r>s)throw new RangeError(v('0if5H',s,s,r));if(r===0)for(i.push(1),t.push(a[0]),e=0;e<s;e++)i.push(n[e]),t.push(a[e]);else if(r===s){for(e=0;e<s;e++)i.push(n[e]),t.push(a[e]);i.push(1),t.push(a[s-1])}else for(e=0;e<s+1;e++)e===r?(i.push(1),o==="row-major"?t.push(a[e-1]):t.push(a[e])):e<r?(i.push(n[e]),t.push(a[e])):(i.push(n[e-1]),t.push(a[e-1]));return c(u)?new u.constructor(h(u),f(u),i,t,p(u),o,{readonly:!0}):new u.constructor(h(u),f(u),i,t,p(u),o)}l.exports=b
});var S=d();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
