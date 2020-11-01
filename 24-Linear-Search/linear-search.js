// Write code to create a function that accepts an arr  of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

const linearSearch = function (arr, target) {

    let result = -1;

    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        if (currentNum === target) {
            result = i;
        }
    }

    return result
};
