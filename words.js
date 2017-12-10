'use strict'

/*
 * Create a function `words` that take a string
 * and return an array of each words using space as a delimiter
 *
<<<<<<< HEAD
 * @next total
 */

//* Begin of tests
 const words = stringMe => stringMe.chartArt[]
   
 console.log(words('a b c'))
=======
 * @next whisper
 */


//* Begin of tests
>>>>>>> d8f67902a0ab3a59d56bb064e9d43fdd4aa81cf9
const assert = require('assert')

assert.strictEqual(typeof words, 'function')
assert.strictEqual(words.length, 1)
assert.deepStrictEqual(words('a b c'), [ 'a', 'b', 'c' ])
assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ])
assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])
assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])
// End of tests */
