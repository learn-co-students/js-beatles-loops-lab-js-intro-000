function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
  const allFacts = []

  let i = 0
  while (i < facts.length) {
    allFacts.push(`${facts[i]}!!!`)
    i++
  }
  return allFacts
}

function iLoveTheBeatles(n) {
  const love = []

  do {
    love.push('I love the Beatles!')
    n++
  } while (n < 15)
  return love
}