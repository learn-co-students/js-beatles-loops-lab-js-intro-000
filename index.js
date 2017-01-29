function theBeatlesPlay(musicians, instruments) {
  var theBeatles = []
  for (var i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theBeatles
}

function johnLennonFacts(facts) {
  var loudFacts = []
  var i = 0
  while (i < facts.length) {
    loudFacts.push(facts[i] + "!!!")
    i++
  }
  return loudFacts
}

function iLoveTheBeatles(n) {
  var muchLove = []
  do {
    muchLove.push("I love the Beatles!")
    n++
  } while (n < 15)
  return muchLove
}
