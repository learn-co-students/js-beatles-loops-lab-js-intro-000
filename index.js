function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
  array.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
  facts[i] = facts[i] + "!!!"
}
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.unshift("I love the Beatles!")
  } while (n > 0 && n < 15);
  return array
}
