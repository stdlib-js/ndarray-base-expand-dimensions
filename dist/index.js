"use strict";var g=function(r,n){return function(){return n||r((n={exports:{}}).exports,n),n.exports}};var q=g(function(j,d){
var c=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),m=require('@stdlib/ndarray-base-assert-is-read-only/dist'),w=require('@stdlib/ndarray-base-normalize-index/dist'),v=require('@stdlib/ndarray-base-dtype/dist'),y=require('@stdlib/ndarray-base-shape/dist'),D=require('@stdlib/ndarray-base-strides/dist'),f=require('@stdlib/ndarray-base-offset/dist'),O=require('@stdlib/ndarray-base-order/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist');function S(r,n){var s,a,h,o,t,u,p,i,e;if(t=y(r,!1),u=D(r,!1),o=O(r),h=c(o),i=t.length,s=[],a=[],p=w(n,i),p===-1)throw new RangeError(R('0ifHS',i+1,i,n));if(p===0)for(a.push(1),h?s.push(t[0]*u[0]):s.push(u[0]),e=0;e<i;e++)a.push(t[e]),s.push(u[e]);else if(p===i){for(e=0;e<i;e++)a.push(t[e]),s.push(u[e]);a.push(1),h?s.push(u[i-1]):s.push(t[i-1]*u[i-1])}else for(e=0;e<i+1;e++)e===p?(a.push(1),h?s.push(u[e-1]):s.push(u[e])):e<p?(a.push(t[e]),s.push(u[e])):(a.push(t[e-1]),s.push(u[e-1]));return m(r)?new r.constructor(v(r),l(r),a,s,f(r),o,{readonly:!0}):new r.constructor(v(r),l(r),a,s,f(r),o)}d.exports=S
});var b=q();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
