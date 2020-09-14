// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

const titleCase = function (str) {

    // I know I want to use string methods to recognize words by signifying a space ' ' in between..
    // take each word and see char at index 0
    // take that char and capitalize it
    // put words back together
    // return new string


    let cappedStr = [];
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i].split("");
        currentWord[0] = currentWord[0].toUpperCase();
        cappedStr.push(currentWord.join(""))

    }

    return cappedStr.join(" ");

    // I am being reminded that the join method with not add a space at the end of a string.
    // At first I started to code an 'if' condition that was adding the new capitalized word to a string plus a space
    // unless it was the last word in the iteration, which I was just going to add the word with no space.
    // I instead referred to secondary materials to find that join took care of this by using it once in the loop and once to return final string from the array of words.


};
