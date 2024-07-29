<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# expandDimensions

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Expand the shape of an array by inserting a new dimension of size one at a specified axis.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
expandDimensions = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-expand-dimensions@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var expandDimensions = require( 'path/to/vendor/umd/ndarray-base-expand-dimensions/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-expand-dimensions@v0.2.2-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.expandDimensions;
})();
</script>
```

#### expandDimensions( x, axis )

Expands the shape of an array `x` by inserting a new dimension of size one at a specified `axis`.

```javascript
var array = require( '@stdlib/ndarray-array' );

// Create a 2x2 ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Prepend a singleton dimension:
var y = expandDimensions( x, 0 );
// returns <ndarray>

var sh = y.shape;
// returns [ 1, 2, 2 ]

// Append a singleton dimension:
y = expandDimensions( x, 2 );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 2, 1 ]

// Insert a singleton dimension:
y = expandDimensions( x, 1 );
// returns <ndarray>

sh = y.shape;
// returns [ 2, 1, 2 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A provided axis must reside on the interval `[-N-1, N]`, where `N` is the rank (i.e., number of dimensions) of the provided input array. If provided a negative `axis`, the axis position at which to insert a singleton dimension is computed as `N + axis + 1`. Hence, if provided `-1`, the resolved axis position is `N` (i.e., a singleton dimension is appended to the input array).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ind2sub@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-expand-dimensions@v0.2.2-umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create a 2-dimensional array:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>

// Insert a singleton dimension:
var y = expandDimensions( x, 1 );
// returns <ndarray>

// Retrieve the shape:
var sh = y.shape;
// returns [ 2, 1, 2 ]

// Retrieve the number of elements:
var N = numel( sh );

// Loop through the array elements...
var i;
for ( i = 0; i < N; i++ ) {
    console.log( 'Y[%s] = %d', ind2sub( sh, i ).join( ', ' ), y.iget( i ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-expand-dimensions.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-expand-dimensions

[test-image]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-expand-dimensions/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-expand-dimensions?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-expand-dimensions.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-expand-dimensions/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-expand-dimensions/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-expand-dimensions/main/LICENSE

</section>

<!-- /.links -->
