function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var array=[]
  for (var i=0; i<musiciansArray.length; i++) {
     array.push(musiciansArray[i] + " plays " + instrumentsArray[i])
}
return array
}

function johnLennonFacts(facts) {
var i=0
  while(i<facts.length){
    facts[i]+="!!!"; i++
  }
  return facts
}

function iLoveTheBeatles (number) {
  var array=[]
  do {array.push("I love the Beatles!");
  number++
}
while (number<15)
return array
}
