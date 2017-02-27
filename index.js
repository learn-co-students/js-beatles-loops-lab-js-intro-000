function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0, j = musicians.length; i < j; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return array
}

function johnLennonFacts(facts) {
  var givenFacts = []
  var i = 0
  while (facts.length > i) {
    givenFacts.push(`${facts[i]}!!!`)
    ++i
  }
  return givenFacts
}

function iLoveTheBeatles(x) {
  var array = []
  do {
    array.push("I love the Beatles!")
    ++x
  } while (x < 15);
  return array
}
