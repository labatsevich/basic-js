const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


const arr = [
    [0, 1, '^^'],
    ['^^', 0, 1, '^^'],
    ['^^', '^^', '^^'],
    ['^^', 1, 2]
]

function countCats(arr) {

    return arr.map(element =>
        element.filter(item => item === '^^').length
    ).reduce((acc, curr) => acc + curr, 0);


}

module.exports = {
    countCats
};