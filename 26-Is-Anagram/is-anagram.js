// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

const isAnagram = function (strA, strB) {

    // first check to see if the strings ar same length
    if (strA.length !== strB.length) {
        return false
    };

    // If same length, continue...then build out an object for each str that tallies the number of times each char occurs
    let objA = {};
    let objB = {};

    for (const char of strA) {

        // Found solved solution with the improved/abbreviated syntax to replace the if/else

        // if (objA.hasOwnProperty(char)) {
        //     objA[char]++;
        // } else {
        //     objA[char] = 1;
        // }

        objA[char] = (objA[char] || 0) + 1

    };


    for (const char of strB) {

        // if (objB.hasOwnProperty(char)) {
        //     objB[char]++;
        // } else {
        //     objB[char] = 1;
        // }

        objB[char] = (objB[char] || 0) + 1
    };


    // Then check to see if the number of object keys are the same, if so move on to comparing them
    let objAKeys = Object.keys(objA);
    let objBKeys = Object.keys(objB);

    if (objAKeys.length !== objBKeys.length) {
        return false
    };


    for (const objKey in objA) {
        if (objA[objKey] !== objB[objKey]) {
            return false
        }
    }


    return true
};



