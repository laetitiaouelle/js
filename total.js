'use strict'

/*
 * Create a function `total` that takes an array on numbers
 * and return it's total
 *
 * @next multiply
 */


//* Begin of tests
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
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1]), 3)
assert.deepStrictEqual(total([ 10, 10, 10]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
