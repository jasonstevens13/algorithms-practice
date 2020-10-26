// Write code to create a function that accepts a string and returns the string in camelCase

const camelCase = function (str) {

    let camel = [];
    let strLower = str.toLowerCase();
    let words = strLower.split(" ");
    camel.push(words[0]);

    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i].split("");
        currentWord[0] = currentWord[0].toUpperCase();
        camel.push(currentWord.join(""))

    }

    return camel.join("");


};
