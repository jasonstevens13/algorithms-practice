// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

const isUnique = function (arr) {

    let obj = {};
    let result = true;

    arr.forEach(num => {

        if (obj.hasOwnProperty(num)) {
            result = false
        } else {
            obj[num] = 1;
        }

    });

    return result

};
