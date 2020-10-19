// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function (str) {

    // take in string and split by words
    // iterate over the array of words, get the first char of each word
    // capitalize it and push to new string 'acronnym'
    // return acronym

    let words = str.split(' ');
    let acronym = '';

    words.forEach(word => {

        let firstChar = word.charAt(0).toUpperCase();
        acronym += firstChar;

    });

    return acronym

};
