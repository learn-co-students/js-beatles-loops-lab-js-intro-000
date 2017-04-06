var musicians = [
  "bieber",
  "rihanna",
  "edsheeran",
  "celinedion",
  "sherylcrow"
]

var instruments = [
  "clarinet",
  "drums",
  "violin",
  "piano",
  "flute"
]

function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < 4; i++) {
      newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

theBeatlesPlay(musicians, instruments);

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  var i = array.length;
  while (i >= 0) {
    i--;
    array[i] = array[i] + "!!!";
  }
  return array
}

johnLennonFacts(facts);

function iLoveTheBeatles(number) {
  var empty = [];
  do {
    empty.push("I love the Beatles!");
    number++
  } while(number < 15)
  return empty
}

iLoveTheBeatles(5)
