// add solution here
function theBeatlesPlay(musicians, instruments) {
  let new_array = []
    for (let i = 0; i < musicians.length; i++) {
      new_array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return new_array
}

function johnLennonFacts(array) {
var i = 0;
var new_array = [];
  while (array.length > i) {
    new_array.push(`${array[i]}` + "!!!");
    i += 1;
  }
  return new_array;
}

function iLoveTheBeatles(num) {
  var beatles_strings = [];
  do {
    beatles_strings.push("I love the Beatles!");
  } while (beatles_strings.length < 15 - num);
  return beatles_strings;
}
