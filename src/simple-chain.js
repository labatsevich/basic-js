const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

    data: [],

    getLength() {
        return this.data.length
    },
    addLink(value) {
        (typeof value !== 'undefined') ? this.data.push(value): this.data.push('( )');

        return this
    },
    removeLink(position) {

        if (!Number.isInteger(position) || position > this.data.length || position <= 0) {
            this.data = [];
            throw new Error("You can't remove incorrect link!");
        }

        this.data.splice(position - 1, 1);

        return this;

    },
    reverseChain() {

        this.data.reverse();
        return this

    },
    finishChain() {
        const res = this.data.map(el => el !== '( )' ? `( ${el} )` : el).join('~~')
        this.data = []
        return res
    }
};

module.exports = {
    chainMaker
};