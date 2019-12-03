function theBeatlesPlay(musicians, instruments) {
  var phrases = []

  for (var i=0; i<musicians.length; i++) {
    phrases[i] = `${musicians[i]} plays ${instruments[i]}`
  }

  return phrases
}

function johnLennonFacts (facts) {
  var i = 0
  var exclaimedFacts = []

  while (i<facts.length) {
    exclaimedFacts[i] = `${facts[i]}!!!`

    i++
  }

  return exclaimedFacts
}

function iLoveTheBeatles (n) {
  var love  = []
  const i = n

  do {
    love[n-i] = "I love the Beatles!"
    n++
  } while (n<15)

  return love
}
