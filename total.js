'use strict'

/*
 * Create a function `total` that takes an array on numbers
 * and return it's total
 *
 * @next multiply
 */


//* Begin of tests
<<<<<<< HEAD
const tab = [2, 2, 0, 233]
const total = tab => {
    let i = 0
    let sum = 0
    while(i < tab.length){
          sum += tab[i];
          i++
    }
    return sum
}
=======
>>>>>>> d8f67902a0ab3a59d56bb064e9d43fdd4aa81cf9
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1]), 3)
assert.deepStrictEqual(total([ 10, 10, 10]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
