// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,o;e=this,o=function(){"use strict";function e(){var e,o=arguments,s=o[0],t="https://stdlib.io/e/"+s+"?";for(e=1;e<o.length;e++)t+="&arg[]="+encodeURIComponent(o[e]);return t}return function(o,s){var t,n,r,u,i,f,d,p;if(u=o.shape,i=o.strides,r=o.order,f=u.length,t=[],n=[],s<0){if(s<-f-1)throw new RangeError(e("invalid argument. Specified axis is out-of-bounds. Must be on the interval: [-%u-1, %u]. Value: `%d`.",f,f,s));s+=f+1}else if(s>f)throw new RangeError(e("invalid argument. Specified axis is out-of-bounds. Must be on the interval: [-%u-1, %u]. Value: `%d`.",f,f,s));if(0===s)for(n.push(1),t.push(i[0]),d=0;d<f;d++)n.push(u[d]),t.push(i[d]);else if(s===f){for(d=0;d<f;d++)n.push(u[d]),t.push(i[d]);n.push(1),t.push(i[f-1])}else for(d=0;d<f+1;d++)d===s?(n.push(1),"row-major"===r?t.push(i[d-1]):t.push(i[d])):d<s?(n.push(u[d]),t.push(i[d])):(n.push(u[d-1]),t.push(i[d-1]));return(p=o.flags)&&!0===p.READONLY?new o.constructor(o.dtype,o.data,n,t,o.offset,o.order,{readonly:!0}):new o.constructor(o.dtype,o.data,n,t,o.offset,o.order)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).expandDimensions=o();
//# sourceMappingURL=index.js.map
