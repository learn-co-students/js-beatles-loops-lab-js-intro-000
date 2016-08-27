function theBeatlesPlay(musicians, instruments){
  var strArr = []
  for (var i=0; i<musicians.length; i++){
    strArr.push(musicians[i].concat(" plays ", instruments[i]))
  }
  return strArr
}

function johnLennonFacts(facts){
  var i=0
  while(facts[i]!=null){
    facts[i] = facts[i].concat("!!!")
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var beatlesArr =[]
  do {
    beatlesArr.push("I love the Beatles!")
    number++
  }
  while (number<15)
  return beatlesArr

}
