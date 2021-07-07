// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myArray
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var myArray = []
  do {
    myArray.push("I love the Beatles!")
    n++
  } while (n < 15)
  return myArray
}
