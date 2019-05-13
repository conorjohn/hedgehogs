const chunk = (array, number) => {
    // Creates an array of elements split into groups the length of size. 
    // If array can't be split evenly, the final chunk will be the remaining elements.
    let newArr = [];
    let index = 0;

    while (index <= array.length) {
        newArr.push(array.slice(index, index + number));
        index += number;
    }

    return newArr;
    // Find a solution using map, filter and/or reduce?
}

module.exports = {
    chunk: chunk
}
// chunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3);