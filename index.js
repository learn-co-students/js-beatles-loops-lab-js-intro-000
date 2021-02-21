function theBeatlesPlay(musicians, instruments) {
  let play = []
  for (let i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}

function johnLennonFacts(facts) {
  let newFacts = []
  let n = 0
  while (n < facts.length) {
    newFacts.push(facts[n] + "!!!")
    n += 1
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  let arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while (n < 15)
  return arr
}
