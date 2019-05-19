/**
 * Gets the element at index n of array. If n is negative, 
 * the nth element from the end is returned. 
 * 
 * @param {Array} arr 
 * @param {Number} pos
 * @return {*}
 * 
 * @example
 *  nth([1, 2, 3, 4, 5], 1) // 2
 *  nth([1, 2, 3, 4, 5], -1) // 4
 */

const nth = (arr, pos) => {
    if (pos < 0) {
        return arr[arr.length - 1 + pos];
    } else {
        return arr[pos];
    }
}

module.exports = {
    nth: nth
}