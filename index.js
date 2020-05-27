
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const music = []

function theBeatlesPlay(musicians, instruments) {
    for (var i = 0; i < musicians.length; i++) {
        music.push(musicians[i] + " plays " + instruments[i]);
    }
    return music

}
  // Use a `for loop`, which iterates over the array of musicians. Be careful
  // about what value you set your `counter` variable to store. (Hint: Think
  // about what the first index of an array is).

  // The first time through the loop, it should create a string using the _first_
  // index of the musicians array **and** the first index of the instruments
  // array: `"John Lennon plays guitar"`.

  // Add this string to the empty array you created. The loop should make the
  // same sentence for every member of the musicians array.

  // The function should return the array of new strings containing what
  // instruments each musician plays.

  var facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice",
  ]

  function johnLennonFacts(facts){
  var new_arr = []
  var i = 0

      while(i < facts.length) {
      new_arr.push(facts[i] + "!!!");
      i += 1;
      }
      return new_arr;
  }




  function iLoveTheBeatles(num) {
      var max = 15;
      var iterations = max -= num;
      var arr = ["I love the Beatles!"];
      var i = 1;

    while (i < iterations) {
        arr.push(arr[0]);
        i += 1;
    }
    return arr;
  }
