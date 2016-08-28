function theBeatlesPlay(musicians, instruments){
  var completeArray = []
  for(var i=0; i < musicians.length; i++){
    if(i >= instruments.length){
      break
    }
    var newStr = `${musicians[i]} plays ${instruments[i]}`
    completeArray.push(newStr)
  }
  return completeArray
}

function johnLennonFacts(facts){
  var completeArray = []
  for(var i = 0; i < facts.length; i++){
    var newStr = facts[i] + '!!!'
    completeArray.push(newStr)
  }
  return completeArray
}

function iLoveTheBeatles(n){
  var completeArray = []
  do{
    completeArray.push("I love the Beatles!")
    ++n
  } while(n < 15)

  return completeArray 
}
