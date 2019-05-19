/**
 * 
 * @param { Array } array 
 */
const zip = (array) => {
    let newArr = [];
    
    array.forEach((arr, i) => {
        //[array[0][0], array[1][0], array[2][0]];
        let innerArray = []; 

        // I need to use the length of a subarray
        arr.forEach((elm, x) => {
            // OK, I have [1, 2]
            innerArray.push(array[x][i]);
        });

        newArr.push(innerArray)
    })
    return newArr;
}

console.log(zip([ [1, 2], [true, false], ['one', 'two'] ]));

/** Almost done **/
// I need to use the length of a subarray
// arr.forEach((elm, x) => {
//     // OK, I have [1, 2]
//     innerArray.push(array[x][i]);
// });