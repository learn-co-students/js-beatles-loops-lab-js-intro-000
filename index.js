// add solution here
function theBeatlesPlay(musicians, instruments){
  var music = []
  for(let i = 0; i < musicians.length; i++){
    music[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return music
}

function johnLennonFacts(lennonFacts){
  var excitedFacts = []
  var i = 0
  while(i < lennonFacts.length){
    excitedFacts[i] = `${lennonFacts[i]}!!!`
    i += 1
  }
  return excitedFacts
}

function iLoveTheBeatles(num){
  var iLoveBeatles = []
  var i = 0
  do{
    iLoveBeatles[i] = "I love the Beatles!"
    num += 1
    i += 1
  }while(num < 15)
  return iLoveBeatles
}
