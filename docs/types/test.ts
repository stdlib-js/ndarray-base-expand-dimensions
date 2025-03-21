/*
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

import array = require( '@stdlib/ndarray-array' );
import expandDimensions = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	expandDimensions( x, 1 ); // $ExpectType ndarray
}

// The compiler throws an error if the function is not provided a first argument which is an ndarray...
{
	expandDimensions( '5', 1 ); // $ExpectError
	expandDimensions( 5, 1 ); // $ExpectError
	expandDimensions( true, 1 ); // $ExpectError
	expandDimensions( false, 1 ); // $ExpectError
	expandDimensions( null, 1 ); // $ExpectError
	expandDimensions( {}, 1 ); // $ExpectError
	expandDimensions( [ '5' ], 1 ); // $ExpectError
	expandDimensions( ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is not provided a second argument which is a number...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	expandDimensions( x, '5' ); // $ExpectError
	expandDimensions( x, true ); // $ExpectError
	expandDimensions( x, false ); // $ExpectError
	expandDimensions( x, null ); // $ExpectError
	expandDimensions( x, {} ); // $ExpectError
	expandDimensions( x, [ '5' ] ); // $ExpectError
	expandDimensions( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array( [ [ 1, 2 ], [ 3, 4 ] ] );

	expandDimensions(); // $ExpectError
	expandDimensions( x ); // $ExpectError
	expandDimensions( x, 1, [ 1, 2, 3 ], [ 2, 3 ] ); // $ExpectError
}
