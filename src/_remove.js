/**
 * 
 * @param {Array<Number>} array
 * @return {*}
 * 
 * @example
 *  remove([1, 2, 3, 4, 5], 5)
 */
const remove = (array, val) => array.filter(item => item !== val);

// Working example
let nums = [[1,2,3,4,5], 5]
let words = [['one', 'two', 'three', 'four', 'five'], 'five'];

console.log(remove(...words))

module.exports = {
    remove: remove
}