/**
 * 
 * @param {Array} array 
 * @param {String} separator 
 * 
 * This function returns a string
 * @example
 *  join(['one', 'two', 'three'], '~');
 *  'one~two~three'
 */

const join = (array, separator = ' ') => {
    let str = '';
    array.map((item, i) => {
        i < array.length - 1 ? str += item + '' + separator : str += item;
    });
    return str;
}