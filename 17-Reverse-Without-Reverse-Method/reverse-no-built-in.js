// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverse = function (str) {


    let words = str.split(' ');
    let reversedWordsArray = [];

    for (let i = words.length - 1; i >= 0; i--) {
        const word = words[i];
        reversedWordsArray.push(word);
    }

    let reversedStr = reversedWordsArray.join(' ');
    return reversedStr
};
