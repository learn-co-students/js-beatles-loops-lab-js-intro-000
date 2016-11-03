function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for (var i = 0; i < musicians.length; i++) {
    list.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return list
}

function johnLennonFacts(facts) {
  var excitedFacts = []
  let i = 0
  while (i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++
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
