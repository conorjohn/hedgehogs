/**
 * This function flattens out nested arrays by one level
 * 
 * @param {Array} array 
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