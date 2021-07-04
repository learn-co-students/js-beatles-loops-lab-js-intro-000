// add solution here
function theBeatlesPlay(musicans, instruments) {
  const arr = []
  
  for (let i = 0, m = musicans.length; i < m; i++) {
    arr.push(`${musicans[i]} plays ${instruments[i]}`)
  }
  
  return arr
}

function johnLennonFacts(facts) {
  const randomFacts = [];
  
  let i = 0
  while (i < facts.length) {
    randomFacts.push(`${facts[i]}!!!`)
    i++
  }
  
  return randomFacts
}

function iLoveTheBeatles(num) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    num++
  } while (num < 15)

  return arr
}