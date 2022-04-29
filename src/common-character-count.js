const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const charArr = Array.from(new Set(s1))

    const arr1 = s1.split(''),
        arr2 = s2.split('')
    let count = 0
    charArr.forEach(ch =>
        count += Math.min(arr1.filter(el => el === ch).length, arr2.filter(el => el === ch).length)
    )

    return count
}

module.exports = {
    getCommonCharacterCount
};