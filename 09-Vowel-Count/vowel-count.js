// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {

    let count = 0;
    let strL = str.toLowerCase();

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // I was able to get the algo working by listing out all vowels in the 'if' statement below,
    // between or pipes, but I need to find a way to shorten that.
    // I added the above strL variable to account for caps in a sentence.



    for (let i = 0; i < strL.length; i++) {
        const currentChar = strL[i];

        if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
            count += 1;
        }
    }

    return count;



    // I found that I could have used indexOf() instead of the ||'s:

    // var result = 0;
    // var vowels = ["a", "e", "i", "o", "u"];

    // for (var i = 0; i < str.length; i++) {
    //   var letter = str[i].toLowerCase();

    //   if (vowels.indexOf(letter) !== -1) {
    //     result += 1;
    //   }
    // }

    // return result;





};
