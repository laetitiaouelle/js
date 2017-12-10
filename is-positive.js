'use strict'

/*
 * Create a function `isPositive` that takes a Number
 * and return if the given number is positive
 *
 * @next sign
 */



//* Begin of tests
<<<<<<< HEAD
<<<<<<< HEAD
const c = -12
const isPositive = c => {
    if( c > 0){
        return true
    }
    else {
        return false
    }
}
=======
>>>>>>> d8f67902a0ab3a59d56bb064e9d43fdd4aa81cf9
=======
>>>>>>> d8f67902a0ab3a59d56bb064e9d43fdd4aa81cf9
const assert = require('assert')

assert.strictEqual(typeof isPositive, 'function')
assert.strictEqual(isPositive.length, 1)
assert.strictEqual(isPositive(3), true)
assert.strictEqual(isPositive(1998790), true)
assert.strictEqual(isPositive(-1), false)
assert.strictEqual(isPositive(-0.7), false)
assert.strictEqual(isPositive(-787823), false)
assert.strictEqual(isPositive(0), false)
// End of tests */
