/**
 * Concat Accepts an Array as it's first value, and an number of values after.
 * The remaining values are added to the primary array, and any nested arrays are flattened by one level
 * 
 * @param {Array} array 
 * @param  {...any} values 
 * @return {Array}
 * 
 * @example
 *  concat([1,2,3], 4, [5], [6])
 */

const concat = (array, ...values) => {
    let newArr = array.slice();
    values.forEach(elm => {
        console.log(typeof elm === Array)
        if (Array.isArray(elm)) {
            elm.forEach(x => newArr.push(x));
        } else {
            newArr.push(elm);
        }
    });
    return newArr;
}

module.exports = {
    concat: concat
}