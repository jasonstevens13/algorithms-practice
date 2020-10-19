// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

const reverseWords = function (str) {

    // take in string and split it by the words
    // take new aray and swap out index position....push to a new array
    // then rejoin the words and return new string

    let words = str.split(' ');
    let reversedWordsArray = [];

    for (let i = words.length - 1; i >= 0; i--) {
        const word = words[i];
        reversedWordsArray.push(word);
    }

    let reversedStr = reversedWordsArray.join(' ');
    return reversedStr

};
