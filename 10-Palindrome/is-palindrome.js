// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

const isPalindrome = function (str) {

    // I remember reviewing this one in our bootcamp. We compared first and last char and then moved in with each iteration.
    // And I believe I remember another way was to reverse the whole str and compare to original
    // At first I was trying to do a loop within a loop to compare chars; not looking right so I found reference to this way:


    // for (let i = 0; i < str.length; i++) {

    //     if (str[i] !== str[str.length - 1 - i]) {
    //         return false;
    //     }

    // }

    // return true;


    // I also gave this way a try, but was forgetting to use the join method and was trying to have one method wrapped around another, rather than chaining them. Found solution here:


    let reversedString = str.split("").reverse().join("");

    if (reversedString === str) {
        return true;
    } else {
        return false;
    }



};
