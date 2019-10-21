function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return emptyArray
}

function johnLennonFacts(facts) {
  var lennonFacts = []
  let i = 0
  while(i < facts.length){
    lennonFacts.push(`${facts[i]}!!!`)
    i++
  }
  return lennonFacts
}

function iLoveTheBeatles(n){
  var emptyArray = []
  do{
    emptyArray.push('I love the beatles!')
    n++
  }  while (n < 15)
  return emptyArray
}
