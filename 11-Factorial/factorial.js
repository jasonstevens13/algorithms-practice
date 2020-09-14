// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = i * factorial;
    }
    return factorial;


    // This one felt pretty straightforward. I did have to stop and think about whether I wanted to initialize the factorial variable with no value or 1.


};
