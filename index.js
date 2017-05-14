function theBeatlesPlay(musicians, instruments) {
  var Beatles = []
  for (let i = 0; i < musicians.length; i++) {
    Beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  } return Beatles
}

function johnLennonFacts(facts) {
  const johnfacts = []
  let i = 0
  while (i < facts.length) {
    johnfacts.push(`${facts[i]}!!!`)
    i++
  } return johnfacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}