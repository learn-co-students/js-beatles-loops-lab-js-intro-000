function theBeatlesPlay(musicians, instruments){
  var outputArray = []
  for(var i = 0; i < musicians.length; i++){
    outputArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return outputArray
}

function johnLennonFacts(facts){
  var i = 0, outputArray = []
  while (i < facts.length){
    outputArray.push(facts[i] + "!!!")
    i++
  }
  return outputArray
}

function iLoveTheBeatles(n){
  var outputArray = []
  do{
    outputArray.push("I love the Beatles!")
    n++
  } while(n < 15)
  return outputArray
}
