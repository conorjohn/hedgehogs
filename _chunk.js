/**
 * This function returns an array of elements split into groups the size of the second input. 
 * If the array can't be split evenly, the final chunk will be the remaining elements.
 * 
 * @param {Array} array 
 * @param {Number} number 
 * @return {Array}
 * 
 * @example
 *  chunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
 */

const chunk = (array, number) => {
    let newArr = [];
    let index = 0;

    // Find a solution using map, filter and/or reduce?
    while (index <= array.length) {
        newArr.push(array.slice(index, index + number));
        index += number;
    }

    return newArr;
}

module.exports = {
    chunk: chunk
}
