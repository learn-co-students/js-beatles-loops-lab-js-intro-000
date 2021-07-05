// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatlesPlay = []
  var i = 0
  for (i=0; i<musicians.length; i++){
    beatlesPlay.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesPlay
}

function johnLennonFacts(facts){
  var i=0
  var newFacts = []
  while (i < facts.length) {
    newFacts.push(facts[i]+"!!!")
    i++
  }
return newFacts
}

function iLoveTheBeatles(n){
  var theBeatles = []
  do {theBeatles.push("I love the Beatles!")
  n++
} while (n < 15)
   return theBeatles
}
