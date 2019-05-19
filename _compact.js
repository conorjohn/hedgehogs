/**
 * This returns an array with all falsey values removed. 
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * 
 * @param {Array} array 
 * @return {Array}
 * 
 * @example 
 *  compact([1, undefined, 2, null, 3, false, '', 4, NaN, 0])
 */

const compact = (array) => {
    return array.filter(item => item);
}

module.exports = {
    compact: compact
}