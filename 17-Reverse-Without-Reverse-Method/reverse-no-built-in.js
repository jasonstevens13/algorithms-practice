// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = function (str) {


    let chars = str.split('');
    let reversedCharsArray = [];

    for (let i = chars.length - 1; i >= 0; i--) {
        const char = chars[i];
        reversedCharsArray.push(char);
    }

    let reversedStr = reversedCharsArray.join('');
    return reversedStr
};
