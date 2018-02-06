function theBeatlesPlay(musicians, instruments) {
  var facts = []
  for (var i=0; i < musicians.length; i++) {
    debugger
    facts.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return facts
}

function johnLennonFacts(facts) {
  var i = 0
  var result = []
  while (i<facts.length) {
    result.push(`${facts[i]}` + "!!!")
    i++
  }
  return result
}

function iLoveTheBeatles(number) {
  var a = []
  do {
    a.push("I love the Beatles!")
    number++
  } while (number<15);
  return a
}
