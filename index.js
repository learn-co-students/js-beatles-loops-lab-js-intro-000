function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < 4; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return array
}

function johnLennonFacts(facts) {
  let i = 0
  var funfacts = []
  while (i < facts.length) {
    funfacts.push(`${facts[i]}!!!`)
    i++;
  }
  return funfacts
}

function iLoveTheBeatles(n) {
  var empty = []
  do {
    empty.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return empty
}
