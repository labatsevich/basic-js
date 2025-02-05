const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

    if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!")


    let copy = Array.from(arr)


    copy.forEach((el, i) => {

        if (el === '--double-prev') {
            copy[i] = copy[--i]

        }
        if (copy[i] === '--double-next') {
            copy[i] = copy[++i]
        }
        if (copy[i] === '--discard-next') {
            delete copy[i];
            delete copy[++i]
        }
        if (copy[i] === '--discard-prev') {

            delete copy[i]
            delete copy[--i]
        }

    })

    return copy.filter(el => el)

}

module.exports = {
    transform
};