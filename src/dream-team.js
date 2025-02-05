const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */


function createDreamTeam(members) {

    return Array.isArray(members) ? members.map(m => {
        if (typeof m === 'string') return m.replace(/\s/g, '').split().join('').toUpperCase()[0]
    }).sort().join('') : false

}

module.exports = {
    createDreamTeam
};