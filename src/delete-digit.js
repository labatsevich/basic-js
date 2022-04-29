const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

    let arr = Array.from(String(n))

    return Math.max(...arr.map((el, i) => (arr.slice(0, i) + arr.slice(i + 1)).split(',').join('')))

}

module.exports = {
    deleteDigit
};