function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(arrayOfFacts) {
  var newArray = [];
  var i = arrayOfFacts.length;
  while(i > 0) {
    newArray.unshift(arrayOfFacts[i - 1] + "!!!");
    i--;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
    (emptyArray.unshift("I love the Beatles!"))
    number++;
  } while (number < 15)
  return emptyArray;
}
