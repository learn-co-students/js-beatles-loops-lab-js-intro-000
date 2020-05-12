function theBeatlesPlay (musicians, instruments) {
  var whoPlays = []
  for (var x = 0; x < musicians.length; x ++){
    whoPlays.push(musicians[x] + " plays " +instruments[x])
  }
  return whoPlays
}

function johnLennonFacts (facts){
  var newFacts = []
  var x = 0
  while (x < facts.length){
    newFacts.push(facts[x] + "!!!"); x ++
  }
  return newFacts
}
function iLoveTheBeatles (x){
  var beatles = []
  do {
    beatles.push('I love the Beatles!'); x++
  }
  while (x < 15)
  return beatles
}
