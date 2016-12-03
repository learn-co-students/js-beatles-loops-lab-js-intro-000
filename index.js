function theBeatlesPlay(musicians, instruments) {
  let musicianInstruments = []

  for(let i = 0; i  < musicians.length; i++) {
    musicianInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicianInstruments
}

function johnLennonFacts(facts) {
  let exclamations = []

  while(facts.length) {
    exclamations.push(`${facts.shift()}!!!`)
  }
  return exclamations
}

function iLoveTheBeatles(n) {
  let BeatlesLove = []

  do {
    BeatlesLove.push("I love the Beatles!")
  } while (++n < 15);

  return BeatlesLove
}
