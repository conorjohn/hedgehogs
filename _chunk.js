const chunk = (array, number) => {
    // Creates an array of elements split into groups the length of size. 
    // If array can't be split evenly, the final chunk will be the remaining elements.
    console.log('Array length: ', array.length);
    // Slice will create a new array from start to end
    let newArr = [];
    let i = 0;
    while(i <= array.length) {
        newArr.push(array.slice(i, i + number));
        i += number;
        console.log(array.slice(i, i + number));
    }
    console.log('New Array length: ', newArr);
}

chunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3);