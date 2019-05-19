/**
 * A function that returns only unique values
 * by filtering out any duplicates
 * 
 * @param {Array} array 
 * @return {Array}
 */

const unique = (array) => {
    // Only return unique values/remove duplicates
    let newArr = [];
    array.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    });
    console.log(newArr);
    return array.filter(item => item);
    // Now add an orderedUnique function that returns the items in the array in an ordered fashion
}

module.exports = {
    unique: unique
}

// unique([5, 5, 3, 4, 2, 1, 5, 4, 3, 4]);