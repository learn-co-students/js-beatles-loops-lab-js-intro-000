function theBeatlesPlay(musicians,instruments){
  var array = []
  for(var i = 0; i < musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(factsArray){
  var i = 0;
  var array = []
  while(i < factsArray.length){
    array[i]= factsArray[i] + "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(n){
  var array = []
  var i =0;
  do{
    ++n
    array[i] = "I love the Beatles!"
    ++i
  }while(n < 15);
  return array
}
