// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-row-major-string@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-offset@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-order@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-data-buffer@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function p(p,h){var j,l,u,f,b,v,c,g,x;if(b=d(p,!1),v=n(p,!1),f=o(p),u=s(f),g=b.length,j=[],l=[],-1===(c=r(h,g)))throw new RangeError(m("invalid argument. Specified axis is out-of-bounds. Must be on the interval: [-%u, %u]. Value: `%d`.",g+1,g,h));if(0===c)for(l.push(1),u?j.push(b[0]*v[0]):j.push(v[0]),x=0;x<g;x++)l.push(b[x]),j.push(v[x]);else if(c===g){for(x=0;x<g;x++)l.push(b[x]),j.push(v[x]);l.push(1),u?j.push(v[g-1]):j.push(b[g-1]*v[g-1])}else for(x=0;x<g+1;x++)x===c?(l.push(1),u?j.push(v[x-1]):j.push(v[x])):x<c?(l.push(b[x]),j.push(v[x])):(l.push(b[x-1]),j.push(v[x-1]));return e(p)?new p.constructor(t(p),a(p),l,j,i(p),f,{readonly:!0}):new p.constructor(t(p),a(p),l,j,i(p),f)}export{p as default};
//# sourceMappingURL=index.mjs.map
