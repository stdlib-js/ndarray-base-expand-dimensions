"use strict";var d=function(r,s){return function(){return s||r((s={exports:{}}).exports,s),s.exports}};var f=d(function(m,h){
var l=require('@stdlib/ndarray-base-assert-is-read-only/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r,s){var t,o,a,i,n,u,e;if(i=r.shape,n=r.strides,a=r.order,u=i.length,t=[],o=[],s<0){if(s<-u-1)throw new RangeError(p('0if5H',u,u,s));s+=u+1}else if(s>u)throw new RangeError(p('0if5H',u,u,s));if(s===0)for(o.push(1),t.push(n[0]),e=0;e<u;e++)o.push(i[e]),t.push(n[e]);else if(s===u){for(e=0;e<u;e++)o.push(i[e]),t.push(n[e]);o.push(1),t.push(n[u-1])}else for(e=0;e<u+1;e++)e===s?(o.push(1),a==="row-major"?t.push(n[e-1]):t.push(n[e])):e<s?(o.push(i[e]),t.push(n[e])):(o.push(i[e-1]),t.push(n[e-1]));return l(r)?new r.constructor(r.dtype,r.data,o,t,r.offset,r.order,{readonly:!0}):new r.constructor(r.dtype,r.data,o,t,r.offset,r.order)}h.exports=v
});var c=f();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
