const compact = (arr) => {
    // Creates an array with all falsey values removed. 
    // The values false, null, 0, "", undefined, and NaN are falsey.
    return arr.filter(item => item);
}

// compact([1, undefined, 2, null, 3, false, '', 4, NaN, 0]);