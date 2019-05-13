const concat = (array, ...values) => {
    console.log(array, ...values)
    let newArr = Array.concat([array, ...values])
    console.log(newArr)
    return newArr;
}

module.exports = {
    concat: concat
}
// concat([1,2,3], 4, [5], [[6]])