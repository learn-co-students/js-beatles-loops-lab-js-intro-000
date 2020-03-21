function theBeatlesPlay(musicians, instruments){
  var whatBeatlesPlay = []
  for (var indx = 0; indx <= (musicians.length -1); indx++){
    whatBeatlesPlay.push(`${musicians[indx]} plays ${instruments[indx]}`)
  }
  return whatBeatlesPlay
}
function johnLennonFacts(facts){
  let excitedFacts = []
  let indx = 0
  while (indx <= (facts.length -1)){
    excitedFacts.push(`${facts[indx]}!!!`)
    indx++
  }
  return excitedFacts
}
function iLoveTheBeatles(num){
  let beatlesChant = []
  do {beatlesChant.push('I love the Beatles!')
  num++
} while (num<15)
return beatlesChant
}
