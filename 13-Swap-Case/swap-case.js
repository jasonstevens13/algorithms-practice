// Write code to create a function takes a string and returns the string with all of the letter cases swapped

const swapCase = function (str) {
    // First take the str in and split it to make an array of every character
    let strArray = str.split('');
    console.log(strArray);
    let newArray = [];
    // Then loop through each char and somehow check the case of the char and swap it
    // The push to a new array? 
    // Then join back together to make new str
    // Wha about spaces or non-aplhas? Hmmm
    strArray.forEach(char => {
        if (char == char.toLowerCase()) {
            newArray.push(char.toUpperCase());
        } else if (char == char.toUpperCase()) {
            newArray.push(char.toLowerCase());
        } else {
            newArray.push(char);
        }
    });

    result = newArray.join('');

    return result;
};
