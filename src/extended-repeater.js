const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

    const repeatTimes = options.repeatTimes || 1
    const separator = (options.separator !== undefined) ? String(options.separator) : '+'
    const additionSeparator = (options.additionSeparator !== undefined) ? String(options.additionSeparator) : '|'
    const additionRepeatTimes = options.additionRepeatTimes || 1
    const addition = (options.addition !== undefined) ? String(options.addition) : ''

    let _strArr = [],
        _additional = '',
        _additionalArr = [],
        i = 0,
        j = 0

    while (i < additionRepeatTimes) {
        _additionalArr.push(addition)
        i++
    }

    _additional = _additionalArr.join(additionSeparator);

    while (j < repeatTimes) {
        _strArr.push(str + _additional)
        j++
    }

    return _strArr.join(separator)


}

module.exports = {
    repeater
};