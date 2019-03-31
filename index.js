// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatlesArray = []
  for(var i = 0; i < musicians.length; i++){
    beatlesArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return beatlesArray
}

function johnLennonFacts(factsArray){
  var johnArray = [] // Creates a blank array
  var i = 0
  while (i < factsArray.length ){
    johnArray[i] = factsArray[i] + "!!!"
    i++
  }
  return johnArray // returns the array
}

function iLoveTheBeatles(n){
  var newVariable = [];
  do {
    newVariable.push("I love the Beatles!");
    n++
  } while(n < 15);
  return newVariable;
}
