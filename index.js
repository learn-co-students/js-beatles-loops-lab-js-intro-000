function theBeatlesPlay(musicians, instruments){
  var combined = [];

  for (var i = 0; i < musicians.length; i++){
    var combinedString = musicians[i] + " plays " + instruments[i]
    combined.push(combinedString)
  }
  return combined
}


function johnLennonFacts(facts){
  for(var i = 0; i < facts.length; i++){
    facts[i] = facts[i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(number){
  var anArray = []
  do{
    anArray.push("I love the Beatles!")
    number++
  }
  while(number<15)
  return anArray;
}
