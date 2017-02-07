function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i] +  " plays " + instruments[i]);
  }
  return array
}

function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = []
  var i = 0
  if (n >= 15){
    return "I love the Beatles!"
  }
  else {
      do {
        array.push("I love the Beatles!");
        i++
      } while (i < n+1);
  }
  return array
}
