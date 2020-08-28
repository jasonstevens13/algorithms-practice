// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

// I knew that I wanted too accomplish this one by checking if the number was divisible by two.
// I quickly googled the result and found it here: https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/
// However, I wanted to know how/why that syntax of '== 0' actually translated to mean that it was divisible by 2.
// Since CSS tricks did not explain, I found it here: https://www.tutorialspoint.com/How-to-determine-if-a-number-is-odd-or-even-in-JavaScript
// The above tutorial reminded me that the modulus % operator in Javscript tells us whether there is a whole number remainder.
// Since we are dividing the num by 2, if 0 remainder than it is even, else it's odd. 

var oddOrEven = function (num) {

    if (num % 2 == 0) {
        return 'even'
    }
    else {
        return 'odd'
    }
};
