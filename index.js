function theBeatlesPlay(musicians, instruments) {
  const beatles = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return beatles
}

function johnLennonFacts(facts) {
  const lennonFacts = []

  let i = 0
  while (i < facts.length) {
    lennonFacts.push(`${facts[i]}!!!`)
    i++
  }

  return lennonFacts
}

function iLoveTheBeatles(n) {
  const beatlesFan = []

  do {
    beatlesFan.push('I love the Beatles!')
    n++
  } while (n < 15)

  return beatlesFan
}
