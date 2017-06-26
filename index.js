function theBeatlesPlay(musicians, instruments){
  var beatlesPlay = []
  for (var i = 0; i < musicians.length; i++){
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesPlay
}

function johnLennonFacts(facts){
  var i = 0
  var newFacts = []
  while(i < facts.length){
    newFacts.push(facts[i] + '!!!')
    i ++
  }
  return newFacts
}

function iLoveTheBeatles(number){
  var beatlesLove = []
  do {
    beatlesLove.push('I love the Beatles!')
    number --
  } while (number > 0 && number < 15)
  return beatlesLove
}
