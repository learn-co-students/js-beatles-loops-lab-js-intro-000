function theBeatlesPlay(musicians, instruments) {
  var musiciansAndInstruments = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansAndInstruments
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
