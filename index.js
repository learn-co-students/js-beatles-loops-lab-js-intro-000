function theBeatlesPlay(musicians, instruments) {
  var newFact = []
  for (var i = 0; i < musicians.length; i++){
    newFact.push(musicians[i] + " plays " + instruments[i])
  }
  return newFact
}

function johnLennonFacts(facts) {
  const lennonFacts = []
  let i = 0

  while (i < facts.length) {
    lennonFacts.push(`${facts[i]}!!!`)
    i++
  } return lennonFacts
}

function iLoveTheBeatles(n){
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    n++
  } while (n < 15)

  return newArray
}
