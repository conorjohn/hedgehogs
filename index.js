module.exports = {
    chunk: require('./src/_chunk').chunk,
    compact: require('./src/_compact').compact,
    concat: require('./src/_reverse').concat,
    flatten: require('./src/_flatten').flatten,
    join: require('./src/_join').join,
    nth: require('./src/_nth').nth,
    reverse: require('./src/_reverse').reverse,
    slice: require('./src/_slice').slice,
    unique: require('./src/_unique.js').unique,
}

/**
 * TODO Next Steps:
 * 1. Add 5 more functions
 * 2. Tidy up and compare to Lodash
 * 3. Add documentation - done
 * 4. Add to NPM - done
 * 5. Build in accordance with https://github.com/umdjs/umd
 **/