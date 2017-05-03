function theBeatlesPlay(musicians, instruments) {
  const ar = []

  for (var i = 0; i < musicians.length; i++) {
    ar.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return ar
}

function johnLennonFacts(facts) {
  const loudfacts = []

  var i = 0;
  while (i < facts.length) {
    loudfacts.push(`${facts[i]}!!!`)
    i++
  }

  return loudfacts
}

function iLoveTheBeatles(num) {
  const ar = []

    do {
      ar.push(`I love the Beatles!`)
      num++
    } while (num < 15);

    return ar
}
