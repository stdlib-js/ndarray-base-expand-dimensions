// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(){var r,e=arguments,s=e[0],o="https://stdlib.io/e/"+s+"?";for(r=1;r<e.length;r++)o+="&arg[]="+encodeURIComponent(e[r]);return o}function e(e,s){var o,t,u,h,p,n,f,a;if(h=e.shape,p=e.strides,u=e.order,n=h.length,o=[],t=[],s<0){if(s<-n-1)throw new RangeError(r("0if5H,L6",n,n,s));s+=n+1}else if(s>n)throw new RangeError(r("0if5H,L6",n,n,s));if(0===s)for(t.push(1),o.push(p[0]),f=0;f<n;f++)t.push(h[f]),o.push(p[f]);else if(s===n){for(f=0;f<n;f++)t.push(h[f]),o.push(p[f]);t.push(1),o.push(p[n-1])}else for(f=0;f<n+1;f++)f===s?(t.push(1),"row-major"===u?o.push(p[f-1]):o.push(p[f])):f<s?(t.push(h[f]),o.push(p[f])):(t.push(h[f-1]),o.push(p[f-1]));return(a=e.flags)&&!0===a.READONLY?new e.constructor(e.dtype,e.data,t,o,e.offset,e.order,{readonly:!0}):new e.constructor(e.dtype,e.data,t,o,e.offset,e.order)}export{e as default};
//# sourceMappingURL=mod.js.map