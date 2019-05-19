/**
 * This function flattens out nested arrays by one level
 * This can only be done on nested arrays with no loose items otside 
 * @param {Array} array 
 * @return {Array}
 * 
 * @example
 *  flatten([ [1, 2, 3], [0, 9, 8], [4, 5, 6] ])
 */
const flatten = (array) => {
    let newArr = [];

    array.forEach((arr, i) => {
        arr.forEach((elm, x) => {
            newArr.push(arr[x]);
        })
    })
    return newArr;
}

module.exports = {
    flatten: flatten
}