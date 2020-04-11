// add solution here
function theBeatlesPlay(musician, instrument) {
  var whoPlaysWhat=[]
  for (let i=0; i<musician.length; i++) {
    whoPlaysWhat.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return whoPlaysWhat
}

function johnLennonFacts(facts) {
  var updatedFacts = []
  let i = 0
  while (i<facts.length) {
    updatedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return updatedFacts
}

function iLoveTheBeatles(num) {
  var loveBeatlesToo = []
  do {
    loveBeatlesToo.push("I love the Beatles!")
    num++
  } while (num<15)
  return loveBeatlesToo
}
