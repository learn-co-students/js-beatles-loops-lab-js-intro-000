function theBeatlesPlay(musicians, instruments) {
  var musician = [];
  for (var i = 0; i < musicians.length; i++) {

  musician.push(musicians[i] + " plays " + instruments[i]);
  }
  return musician;
}

function johnLennonFacts(facts) {
  var johnFacts = [];
  var i = 0;
  while (i < facts.length) {
    johnFacts.push(facts[i] + "!!!");
    i++;
  }
    return johnFacts;
}

function iLoveTheBeatles(n) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return beatles;
}
