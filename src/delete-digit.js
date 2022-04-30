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

    let str = String(n),
        combination = []

    for (let i = 0; i < str.length; i++) {
        combination.push(str.replace(str[i], ''))
    }

    return Math.max(...combination)

}

module.exports = {
    deleteDigit
};