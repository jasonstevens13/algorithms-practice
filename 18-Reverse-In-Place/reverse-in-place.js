// Write code to return a new string with all of the elements of array reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = function (arr) {

    let left = 0;
    let right = arr.length - 1;
    let leftPlaceholder;
    let rightPlaceholder;

    while (left < right) {

        leftPlaceholder = arr[left];
        rightPlaceholder = arr[right];

        arr[left] = rightPlaceholder;
        arr[right] = leftPlaceholder;


        left++;
        right--;

    }

    return arr


};


