// add solution here

function theBeatlesPlay(musicians, instruments) {
  var theyPlay = []

  for (let i = 0; i < musicians.length; i++) {
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return theyPlay
}

function johnLennonFacts(facts) {
  let i = 0

  while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }

  return facts
}

function iLoveTheBeatles(n) {
  var love = []

  do {
    love.push("I love the Beatles!")
    n++
  } while (n < 15)

  return love
}
