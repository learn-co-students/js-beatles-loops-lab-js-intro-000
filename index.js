function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var newArray = [];
  var i = 0;
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!");
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var empty = [];
  do {
    empty.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return empty;
}
