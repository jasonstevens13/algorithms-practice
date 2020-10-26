// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

const productOfLargestTwo = function (arr) {

    // Note: at first I initialized largestnum and secondnum without a value, but then solved this once I assigned the values of index 0 and 1.
    // When I view the solution, I found that I could have initalized with 'null' (I guess that using null would also take care of an edge case if for some reason an array was passed with no nums or a single num.)
    let largestNum = arr[0];
    let secondLargestNum = arr[0];
    let placeholder;

    arr.forEach(num => {

        if (num >= largestNum) {
            placeholder = largestNum;
            largestNum = num;
            secondLargestNum = placeholder;
        }

    });

    let product = largestNum * secondLargestNum;
    return product

};

