function theBeatlesPlay(musicians, instruments) {
  const beatlesWithInstruments = []

  for (let num = 0, l = musicians.length; num < l; num++) {
    beatlesWithInstruments.push(`${musicians[num]} plays ${instruments[num]}`)
  }

  return beatlesWithInstruments
}

function johnLennonFacts(facts) {
  const lennonFactsEx = []

  let num = 0
  while (num < facts.length) {
    lennonFactsEx.push(`${facts[num]}!!!`)
    num++
  }

  return lennonFactsEx
}


function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

 return arr

}
