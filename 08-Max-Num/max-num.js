// Write code to return the largest number in the given array

var maxNum = function (arr) {
    // I thought I could use Math.max here, as this was at the forefrot of my mind after reading Chapter 2 of Eloquent JavaScript.

    // console.log(Math.max(arr));
    // I will try a loop instead.

    // let max = arr[0];
    // for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i];
    //     if (element > max) {
    //         max = element
    //     }

    // }
    // return max;

    // This above works. At first my return was in the for block, so I have to bring it out a level of scope.


    // NOTE: I investigated further on my intuition to use math.max and found the following from Mozilla

    // return Math.max.apply(null, arr);

    // However, MDN indicates that the above can come with issues if there are too many elements of an array, since they're being passed as args.
    // Instead use reduce method:
    let max = arr.reduce(function (a, b) {
        return Math.max(a, b);
    });

    return max;


};
