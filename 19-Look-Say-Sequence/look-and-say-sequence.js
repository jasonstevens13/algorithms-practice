// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

const lookAndSay = function (n) {

    let numStr = n.toString();
    let numArr = numStr.split("");
    let result = '';
    let pointer1 = 0;
    let pointer2 = 1;
    let tempPointer;
    let count = 1;



    while (pointer2 <= numArr.length) {

        if (numArr[pointer1] === numArr[pointer2] && pointer2 < numArr.length) {
            count += 1;
            pointer2 += 1;
        } else if (numArr[pointer1] === numArr[pointer2] && pointer2 === numArr.length - 1) {
            count += 1;
            result += count;
            result += numArr[pointer1];
        } else {
            result += count;
            result += numArr[pointer1];
            count = 1;
            tempPointer = pointer2;
            pointer2 += 1;
            pointer1 = tempPointer;

        }

    }

    let resultNum = parseInt(result, 10);
    return resultNum
};


// 114333877 should return 2114331827
// - - 