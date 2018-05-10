function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i])
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var n = 0
  var uitvoer = []
  while (n < facts.length) {
    uitvoer.push(facts[n] + "!!!");
    n++;
  }
  return uitvoer;
}

function iLoveTheBeatles(a) {
  var loveEm = []
  do {
    loveEm.push("I love the Beatles!");
    a++;
  } while (a < 15)
  return loveEm
}
