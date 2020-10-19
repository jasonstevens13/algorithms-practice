// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

const longestWord = function (str) {

    // Take in str and split by spaces to create an array of words
    // Then taake each word and count chars
    // push first word to and var 'longestword'for longest word
    // as I iterate and count chars and each word, do comparison on length of 'longestword'
    // replace if longer
    // return 'longestWord' var

    let words = str.split(" ");

    let longestWord = '';

    words.forEach(word => {

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });


    return longestWord;

};
