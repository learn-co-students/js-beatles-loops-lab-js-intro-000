function theBeatlesPlay(musicians,instruments){
  var instrument = []
  for (var i = 0; i<4;i++){
    instrument.push(musicians[i] + " plays " + instruments[i])

  }
  return instrument
}
function johnLennonFacts(facts){
  var i = 0
var newBeatles = []
  while(i < facts.length){
    newBeatles.push(facts[i] + "!!!")
    i++
  }

  return newBeatles
}
function iLoveTheBeatles(n){
  var emptyarray = []


  do {
    emptyarray.push("I love the Beatles!")
  n++} while(n<15);

  return emptyarray
}
