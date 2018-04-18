function theBeatlesPlay(mArray,iArray){
  var combArray = []
  for(var i=0; i< mArray.length ; i++){
    combArray[i] = `${mArray[i]} plays ${iArray[i]}`

  }
  return combArray
}
function johnLennonFacts(facts){
  var i =0
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}
function iLoveTheBeatles(number){
  var fArray = []
  do{
    fArray.push(`I love the Beatles!`)
    number++
  } while (number < 15)
  return fArray
}
