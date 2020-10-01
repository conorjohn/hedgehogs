/**
 * TODO: INCOMPLETE
 * 
 * @param {Array} array 
 * @return {Array}
 * 
 * According to Lodash
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false 
 */

//  Good Stackoverflow answer: https://stackoverflow.com/questions/4459928/how-to-deep-clone-in-javascript

// If you clone an object that contains a function, the function will be lost, need deep clone in that case
const cloneDeep = (array) => {
    // Value Check
    if(!array) { return array }
    
    // Data Type Check
    const types = [Number, String, Boolean, Array, Object];
    return JSON.parse(JSON.stringify(array));
}
let orig = [{a: 1, b: () => { console.log('something') }, c: 'yurt'}];
orig[0].b();

let clone = cloneDeep(orig);
// clone[0].b() no longer exists
console.log(clone);
