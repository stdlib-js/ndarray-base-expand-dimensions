// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,o;e=this,o=function(){"use strict";function e(){var e,o=arguments,r=o[0],s="https://stdlib.io/e/"+r+"?";for(e=1;e<o.length;e++)s+="&arg[]="+encodeURIComponent(o[e]);return s}return function(o,r){var s,t,n,f,u,p,i,h;if(f=o.shape,u=o.strides,n=o.order,p=f.length,s=[],t=[],r<0){if(r<-p-1)throw new RangeError(e("0if5H,L6",p,p,r));r+=p+1}else if(r>p)throw new RangeError(e("0if5H,L6",p,p,r));if(0===r)for(t.push(1),s.push(u[0]),i=0;i<p;i++)t.push(f[i]),s.push(u[i]);else if(r===p){for(i=0;i<p;i++)t.push(f[i]),s.push(u[i]);t.push(1),s.push(u[p-1])}else for(i=0;i<p+1;i++)i===r?(t.push(1),"row-major"===n?s.push(u[i-1]):s.push(u[i])):i<r?(t.push(f[i]),s.push(u[i])):(t.push(f[i-1]),s.push(u[i-1]));return(h=o.flags)&&!0===h.READONLY?new o.constructor(o.dtype,o.data,t,s,o.offset,o.order,{readonly:!0}):new o.constructor(o.dtype,o.data,t,s,o.offset,o.order)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).expandDimensions=o();
//# sourceMappingURL=browser.js.map
