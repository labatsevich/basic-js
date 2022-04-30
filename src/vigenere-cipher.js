const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

    constructor(order = true) {
        this.order = order
    }

    encrypt(message, key) {

        if (!message || !key) throw new Error('Incorrect arguments!')


        key = key.toUpperCase()
        let count = 0

        let str = [...message.toUpperCase()].reduce((str, ch) => {

            let chCode = ch.charCodeAt()

            if (chCode < 65 || chCode > 90) {
                return str + ch
            }

            const asciiCode = ((((chCode - 65) + (key.charCodeAt((count % key.length)) - 65)) % 26) + 65)
            count++

            return str + String.fromCharCode(asciiCode)

        }, '')

        return (this.order) ? str : str.split('').reverse().join('')

    }

    decrypt(message, key) {

        if (!message || !key) throw new Error('Incorrect arguments!')

        key = key.toUpperCase()
        let count = 0

        let str = [...message.toUpperCase()].reduce((str, ch) => {

            let chCode = ch.charCodeAt()

            if (chCode < 65 || chCode > 90) return str + ch

            const keyCode = key.charCodeAt(count % key.length)
            let tempCode = (chCode - 65) - (keyCode - 65);
            const asciiCode = (((tempCode < 0) ? tempCode += 26 : tempCode) % 26) + 65

            count++

            return str + String.fromCharCode(asciiCode)

        }, '')


        return this.order ? str : str.split('').reverse().join('')

    }


}





module.exports = {
    VigenereCipheringMachine
};