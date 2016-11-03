function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for (var i = 0; i < musicians.length; i++) {
    list.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return list
}

function johnLennonFacts(facts) {
  var excitedFacts = []
  for (var i = 0; i < facts.length; i++) {
    excitedFacts.push(`${facts[i]}!!!`)
  }
  return excitedFacts
}

function iLoveTheBeatles(n) {
  var empty = []
  do {
    empty.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return empty
}
