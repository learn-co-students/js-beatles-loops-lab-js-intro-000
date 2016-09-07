function theBeatlesPlay(musicians, instruments) {
  var matches = []
  for (var i = 0; i < musicians.length; i += 1) {
    matches.push(musicians[i] + " plays " + instruments[i]);
  }
  return matches
}

function johnLennonFacts(facts) {
  var omgFacts = []
  var index = 0
  while (index < facts.length) {
    omgFacts.push(facts[index] + "!!!")
    index +=1
  }
  return omgFacts
}

function iLoveTheBeatles(n) {
  var statements = []
  do {
    statements.unshift("I love the Beatles!");
    n+=1;
  } while (n<15);
  return statements
}
