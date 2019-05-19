/**
 * This function returns a subset of the passed array from the 
 * starting index, up to but not including the last index
 * 
 * @param {Array} array 
 * @param {Number} startPos 
 * @param {String} endPos 
 * 
 * @return {Array}
 */
const slice = (array, startPos, endPos) => {
    return array.slice(startPos, endPos);
}

module.exports = {
    slice: slice
}