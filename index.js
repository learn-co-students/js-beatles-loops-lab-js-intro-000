// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = Array();
  for (let i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return array;
}

function johnLennonFacts(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = `${array[i]}!!!`;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var array = Array();
  var counter = 0;
  do {
    array[counter] = "I love the Beatles!"
    counter++;
  } while (counter <= num && num < 15)
  return array;
}
