// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {

    // I will look through JS dev docs to see if there is method for this specifically; or for a number range
    for (let i = 0; i <= num; i += 2) {
        console.log(i);
    }

    // After some looking and thought, I figured I can simply loop through until I reach num. I think that there may be a better way to do this with a method however... not sure just yet.
    // Also, I am realizing that I could have used the same syntax ' if (num % 2 == 0)' in my 'odd or even' algo somehow in the loop as well. 
};
