// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array =[]

  for (var i = 0; i < 4; i++) {
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  var newfacts = []
  var x = 0;
  while (x < array.length) {
    newfacts[x] = array[x] + "!!!"
    x = x + 1;
  }
  return newfacts
}

function iLoveTheBeatles(number) {
var array = [];
var y = 0;
do {
array[y] = "I love the Beatles!"
y = y + 1;
} while (y <= number && number < 16)

return array
}
