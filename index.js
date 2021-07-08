// add solution here
function theBeatlesPlay(musicians, instruments) {
  var facts = []

  for (let i = 0; i < musicians.length; i++) {
    facts.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return facts
}

function johnLennonFacts(facts) {
  var i = 0;

  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"

    i++
  }

  return facts
}

function iLoveTheBeatles(n) {
  var shouts = []

  do {
    shouts.push("I love the Beatles!")

    n++
  } while (n < 15)

  return shouts
}
