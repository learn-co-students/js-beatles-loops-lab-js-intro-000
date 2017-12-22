function theBeatlesPlay (musicians, instruments) {
  var allMusicians = [];
  for (var i = 0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return allMusicians;
}

const facts =
["He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var allFacts = [];
  var i = 0;
  while (i < facts.length) {
    allFacts.push(facts[i] + "!!!");
    i++;
  }
  return allFacts
}

function iLoveTheBeatles (x) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    x++;
  } while (x < 15);
  return array;
}
