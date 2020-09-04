// Write code to add all the numbers in `arr` and return the total

const sumArray = function (arr) {

    // I am thinking that I can easily loop through and add the number to a variable; 
    // however, I wonder if there is a method to do this as well... I think I used reduce method in a project.
    // Yes reduc works.

    let sum = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    return sum;
};


// For notes, material provided the loop approach that follows:

// var sumArray = function(arr) {
//     var result = 0;

//     for (var i = 0; i < arr.length; i++) {
//       var currentNumber = arr[i];
//       result += currentNumber;
//     }

//     return result;
//   };
