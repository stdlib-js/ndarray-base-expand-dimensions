/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isRowMajor = require( '@stdlib/ndarray-base-assert-is-row-major-string' );
var isReadOnly = require( '@stdlib/ndarray-base-assert-is-read-only' );
var normalizeIndex = require( '@stdlib/ndarray-base-normalize-index' );
var getDType = require( '@stdlib/ndarray-base-dtype' );
var getShape = require( '@stdlib/ndarray-base-shape' );
var getStrides = require( '@stdlib/ndarray-base-strides' );
var getOffset = require( '@stdlib/ndarray-base-offset' );
var getOrder = require( '@stdlib/ndarray-base-order' );
var getData = require( '@stdlib/ndarray-base-data-buffer' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Expands the shape of an array by inserting a new dimension of size one at a specified axis.
*
* ## Notes
*
* -   A provided axis must reside on the interval `[-N-1, N]`, where `N` is the rank (i.e., number of dimensions) of the provided input array. If provided a negative `axis`, the axis position at which to insert a singleton dimension is computed as `N + axis + 1`. Hence, if provided `-1`, the resolved axis position is `N` (i.e., a singleton dimension is appended to the input array).
*
* @param {ndarray} x - input array
* @param {integer} axis - axis at which to insert a singleton dimension
* @throws {RangeError} must provide a valid axis
* @returns {ndarray} output array
*
* @example
* var array = require( '@stdlib/ndarray-array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var shx = x.shape;
* // returns [ 2, 2 ]
*
* var y = expandDimensions( x, 1 );
* // returns <ndarray>
*
* var shy = y.shape;
* // returns [ 2, 1, 2 ]
*
* var v = y.get( 0, 0, 0 );
* // returns 1
*
* v = y.get( 0, 0, 1 );
* // returns 2
*
* v = y.get( 1, 0, 0 );
* // returns 3
*
* v = y.get( 1, 0, 1 );
* // returns 4
*/
function expandDimensions( x, axis ) {
	var strides;
	var shape;
	var isrm;
	var ord;
	var sh;
	var st;
	var d;
	var N;
	var i;

	sh = getShape( x, false );
	st = getStrides( x, false );
	ord = getOrder( x );

	isrm = isRowMajor( ord );
	N = sh.length;

	strides = [];
	shape = [];

	d = normalizeIndex( axis, N );
	if ( d === -1 ) {
		throw new RangeError( format( 'invalid argument. Specified axis is out-of-bounds. Must be on the interval: [-%u, %u]. Value: `%d`.', N+1, N, axis ) );
	}
	if ( d === 0 ) {
		// Prepend singleton dimension...
		shape.push( 1 );
		if ( isrm ) {
			strides.push( sh[ 0 ] * st[ 0 ] );
		} else {
			strides.push( st[ 0 ] );
		}
		// Copy remaining dimensions...
		for ( i = 0; i < N; i++ ) {
			shape.push( sh[ i ] );
			strides.push( st[ i ] );
		}
	} else if ( d === N ) {
		// Copy dimensions...
		for ( i = 0; i < N; i++ ) {
			shape.push( sh[ i ] );
			strides.push( st[ i ] );
		}
		// Append singleton dimension...
		shape.push( 1 );
		if ( isrm ) {
			strides.push( st[ N-1 ] );
		} else {
			strides.push( sh[ N-1 ] * st[ N-1 ] );
		}
	} else {
		// Insert a singleton dimension...
		for ( i = 0; i < N+1; i++ ) {
			if ( i === d ) {
				shape.push( 1 );
				if ( isrm ) {
					strides.push( st[ i-1 ] );
				} else { // ord === 'column-major'
					strides.push( st[ i ] );
				}
			} else if ( i < d ) {
				shape.push( sh[ i ] );
				strides.push( st[ i ] );
			} else { // i > d
				shape.push( sh[ i-1 ] );
				strides.push( st[ i-1 ] );
			}
		}
	}
	if ( isReadOnly( x ) ) {
		// If provided a read-only view, the returned array should also be read-only...
		return new x.constructor( getDType( x ), getData( x ), shape, strides, getOffset( x ), ord, { // eslint-disable-line max-len
			'readonly': true
		});
	}
	return new x.constructor( getDType( x ), getData( x ), shape, strides, getOffset( x ), ord ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = expandDimensions;
