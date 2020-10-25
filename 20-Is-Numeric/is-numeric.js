// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

// const isNumeric = function (str) {

//     // let strArr = str.split("");
//     // let plusMinusCounter = 0;
//     // let decimalCounter = 0;
//     // let numberCounter = 0;
//     // let notNumberCounter = 0;
//     // const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     // if (strArr.indexOf('-') > 0 || strArr.indexOf('+') > 0 || strArr.indexOf('.') === strArr.length - 1 || strArr.length < 1) {
//     //     return false
//     // }

//     // for (let i = 0; i < strArr.length; i++) {
//     //     const element = strArr[i];
//     //     if (element == '.') {
//     //         decimalCounter++;
//     //         continue;
//     //     }

//     //     if (element == '+' || element == '-') {
//     //         plusMinusCounter++;
//     //         continue;
//     //     }

//     //     if (nums.indexOf(element, 0)) {
//     //         numberCounter++
//     //         continue;
//     //     }

//     //     if (nums.indexOf(element, 0) == -1) {
//     //         notNumberCounter++;
//     //         continue;
//     //     }


//     // }



//     // if (plusMinusCounter > 1 || decimalCounter > 1 || notNumberCounter > 0) {
//     //     return false
//     // } else if (numberCounter >= 1) {
//     //     return true
//     // } else {
//     //     return false
//     // }



//     // ALL CODE ABOVE HERE WAS MY FIRST ATTEMPT, BUT I COULD NOT GET THE LAST TEST TO PAST FOR SOME REASON
//     // Sought out the solution and fond that was mine was fundementally close, but here it is:


// };



const isNumeric = function (str) {
    var digits = {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true
    };

    let hasNum = false;
    let hasDecimal = false;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (digits[char]) {
            hasNum = true;
            continue;
        }

        if (i === 0) {
            if (char === "-" || char === "+") {
                continue;
            }
        }

        if (char === ".") {
            if (hasDecimal === true) {
                return false;
            }

            hasDecimal = true;
            continue;
        }

        return false;
    }

    if (hasNum) {
        return true;
    }

    return false;
};
