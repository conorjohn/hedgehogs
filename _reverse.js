const chunk = (array) => {
    // Reverses array so that the first element becomes the last, 
    // the second element becomes the second to last, and so on.
    let newArray = [];
    for (let i = array.length - 1; i > 0; i--) {
        newArray.push(array[i]);
    }
    console.log('After loop: ', newArray);
    // Maybe we should use .splice here
}

chunk([0,1,2,3,4,5,6,7,8]);