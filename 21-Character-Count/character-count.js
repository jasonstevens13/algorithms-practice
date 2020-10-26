// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

const characterCount = function (str) {

    // Create a new object.
    let obj = {};
    let strArr = str.split("");

    // Loop through each character in the given string and create a new key for each character in the string.
    // The value of the character's key should be the number of times it appears in the string.


    for (let i = 0; i < strArr.length; i++) {
        const element = strArr[i];
        if (element in obj) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    }

    return obj

};
