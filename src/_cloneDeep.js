/**
 * STATUS: WIP
 * 
 * @param {Array} array 
 * @return {Array}
 * 
 * According to Lodash
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * 
 * This solution appears to work correctly, no function loss or apparant data loss
 * will use this as an opportunity to study copying data in JS more thoroughly
 * 
 * @example
 * let orig = [{a: 1, b: () => { console.log('something') }, c: 'yurt'}, {d: "Title", e: 5, f: (elm) => console.log('variabe passing through: ', elm)}];
 * let clone = cloneDeep(orig);
 *
 * console.log('Are they both equal: ', orig === clone);
 */

//  Good Stackoverflow answer: https://stackoverflow.com/questions/4459928/how-to-deep-clone-in-javascript

// If you clone an object that contains a function, the function will be lost, need deep clone in that case
const cloneDeep = (array) => {
    // Value Check
    if(!array) { return array }
    let newArr = [];
    // Data Type Check
    const types = [Number, String, Boolean, Array, Object];
    
    // Is this good enough?
    array.forEach(object => {
        newArr.push(Object.assign({}, object));
    });

    return newArr;
}

module.exports = {
    cloneDeep: cloneDeep 
}

