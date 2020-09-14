// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

const fizzBuzz = function (arr) {

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (num % 3 == 0 && num % 5 !== 0) {
            console.log('Fizz');
        }
        else if (num % 5 == 0 && num % 3 !== 0) {
            console.log('Buzz');
        }
        else if (num % 3 == 0 && num % 5 == 0) {
            console.log('Fizz Buzz');
        }
        else {
            console.log(num);
        }

    }


};

// Note: I had this correct, but was returning rather than console.logging, so the test was not passing at first.
// Furthermore, I see that in a solved solution they have the Fizz Buzz condition as being divisible by 15, rather than using && like I do above.
