// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function r(r,t){var o,u,n,i,d,a,p;if(i=r.shape,d=r.strides,n=r.order,a=i.length,o=[],u=[],t<0){if(t<-a-1)throw new RangeError(s("invalid argument. Specified axis is out-of-bounds. Must be on the interval: [-%u-1, %u]. Value: `%d`.",a,a,t));t+=a+1}else if(t>a)throw new RangeError(s("invalid argument. Specified axis is out-of-bounds. Must be on the interval: [-%u-1, %u]. Value: `%d`.",a,a,t));if(0===t)for(u.push(1),o.push(d[0]),p=0;p<a;p++)u.push(i[p]),o.push(d[p]);else if(t===a){for(p=0;p<a;p++)u.push(i[p]),o.push(d[p]);u.push(1),o.push(d[a-1])}else for(p=0;p<a+1;p++)p===t?(u.push(1),"row-major"===n?o.push(d[p-1]):o.push(d[p])):p<t?(u.push(i[p]),o.push(d[p])):(u.push(i[p-1]),o.push(d[p-1]));return e(r)?new r.constructor(r.dtype,r.data,u,o,r.offset,r.order,{readonly:!0}):new r.constructor(r.dtype,r.data,u,o,r.offset,r.order)}export{r as default};
//# sourceMappingURL=index.mjs.map
