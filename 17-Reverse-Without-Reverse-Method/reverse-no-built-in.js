// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = function (str) {


    // let chars = str.split('');
    // let reversedCharsArray = [];

    // for (let i = chars.length - 1; i >= 0; i--) {
    //     const char = chars[i];
    //     reversedCharsArray.push(char);
    // }

    // let reversedStr = reversedCharsArray.join('');
    // return reversedStr


    // after solving as above, I looked for optimaztion/cleaner code... 
    // solved doesn't use split method or the empty array as it is not necessary since we need
    // to reverse the entire string without regard to separate words etc.
    // cleaner solve below:

    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        let letter = str[i];
        result += letter;
    }

    return result;



};
