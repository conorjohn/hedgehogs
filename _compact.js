/**
 * This returns an array with all falsey values removed. 
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * @param {Array} arr 
 */
const compact = (arr) => {
    return arr.filter(item => item);
}

module.exports = {
    compact: compact
}
// compact([1, undefined, 2, null, 3, false, '', 4, NaN, 0]);