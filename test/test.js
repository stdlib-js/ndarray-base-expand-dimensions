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

var tape = require( 'tape' );
var array = require( '@stdlib/ndarray-array' );
var ndarray = require( '@stdlib/ndarray-base-ctor' );
var isReadOnly = require( '@stdlib/ndarray-base-assert-is-read-only' );
var expandDimensions = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof expandDimensions, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid `axis` argument', function test( t ) {
	var values;
	var x;
	var i;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	values = [
		10,
		-10,
		99,
		-99
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			expandDimensions( x, value );
		};
	}
});

tape( 'the function prepends singleton dimensions', function test( t ) {
	var x;
	var y;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	y = expandDimensions( x, 0 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 1, 2, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function prepends singleton dimensions (negative axis)', function test( t ) {
	var x;
	var y;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	y = expandDimensions( x, -x.ndims-1 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 1, 2, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function appends singleton dimensions', function test( t ) {
	var x;
	var y;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	y = expandDimensions( x, x.ndims );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 2, 1 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function appends singleton dimensions (negative axis)', function test( t ) {
	var x;
	var y;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	y = expandDimensions( x, -1 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 2, 1 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function inserts singleton dimensions', function test( t ) {
	var x;
	var y;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	y = expandDimensions( x, 1 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 1, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function inserts singleton dimensions (negative axis)', function test( t ) {
	var x;
	var y;

	x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	y = expandDimensions( x, -2 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 1, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function prepends singleton dimensions (base; row-major)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = expandDimensions( x, 0 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 1, 2, 2 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 4, 2, 1 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function prepends singleton dimensions (base; row-major; negative axis)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = expandDimensions( x, -x.ndims-1 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 1, 2, 2 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 4, 2, 1 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function prepends singleton dimensions (base; column-major)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = expandDimensions( x, 0 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 1, 2, 2 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 1, 1, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function prepends singleton dimensions (base; column-major; negative index)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = expandDimensions( x, -x.ndims-1 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 1, 2, 2 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 1, 1, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function appends singleton dimensions (base; row-major)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = expandDimensions( x, x.ndims );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 2, 1 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 2, 1, 1 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function appends singleton dimensions (base; row-major; negative axis)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = expandDimensions( x, -1 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 2, 1 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 2, 1, 1 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function appends singleton dimensions (base; column-major)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = expandDimensions( x, x.ndims );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 2, 1 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 1, 2, 4 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function appends singleton dimensions (base; column-major; negative index)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = expandDimensions( x, -1 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 2, 1 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 1, 2, 4 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function inserts singleton dimensions (base; row-major)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = expandDimensions( x, 1 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 1, 2 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 2, 2, 1 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function inserts singleton dimensions (base; row-major; negative axis)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	y = expandDimensions( x, -2 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 1, 2 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 2, 2, 1 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function inserts singleton dimensions (base; column-major)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = expandDimensions( x, 1 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 1, 2 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 1, 2, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'the function inserts singleton dimensions (base; column-major; negative index)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	y = expandDimensions( x, -2 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 1, 2 ], 'returns expected value' );
	t.deepEqual( y.strides, [ 1, 2, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'if provided a read-only array, the function returns a read-only array', function test( t ) {
	var x;
	var y;

	x = array( [ 1, 2, 3, 4 ], {
		'shape': [ 2, 1, 2 ],
		'readonly': true
	});

	y = expandDimensions( x, 2 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 1, 1, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a writable array, the function returns a writable array', function test( t ) {
	var x;
	var y;

	x = array( [ 1, 2, 3, 4 ], {
		'shape': [ 2, 1, 2 ],
		'readonly': false
	});

	y = expandDimensions( x, 1 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 2, 1, 1, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( y ), false, 'returns expected value' );

	t.end();
});

tape( 'if provided a writable array, the function returns a writable array (base)', function test( t ) {
	var x;
	var y;

	x = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 1, 2 ], [ 2, 2, 1 ], 0, 'row-major' );
	y = expandDimensions( x, 0 );

	t.notEqual( y, x, 'returns expected value' );
	t.deepEqual( y.shape, [ 1, 2, 1, 2 ], 'returns expected value' );
	t.strictEqual( y.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( y ), false, 'returns expected value' );

	t.end();
});
