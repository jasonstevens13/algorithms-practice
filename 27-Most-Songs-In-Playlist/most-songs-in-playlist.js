// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {

  let arrSorted = arr.sort();
  let sumDurations = 0;
  let count = 0;

  arrSorted.forEach(song => {
    sumDurations = sumDurations + song;

    if (sumDurations <= 60) {
      count++
    } else {
      return count
    }
  });

  return count


};
