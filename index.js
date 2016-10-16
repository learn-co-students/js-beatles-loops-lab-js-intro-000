function theBeatlesPlay(musicians, instruments){
  var emptyArray = Array()
  for (var counter = 0; counter < musicians.length; counter++){
    emptyArray.push(musicians[counter] + " plays " + instruments[counter])
  }
  return emptyArray
}

function johnLennonFacts(factsAboutJohnLennon){
  var factArray = Array()
  var counter = factsAboutJohnLennon.length
  var i = 0
  while(i < counter) {
    factArray.push(factsAboutJohnLennon[i] + "!!!")
    i++
  }
  return factArray
}

function iLoveTheBeatles(numberAsAParameter){
  // number goes in
  var beatlesLover = Array() // array gets created
  var incrementer = 0 // incrementer keeps track
  var counter = 0
  if (numberAsAParameter > 15){
    counter = 0
  } else {
    counter = numberAsAParameter
  }
  do {
    beatlesLover.push("I love the Beatles!")
    incrementer++
  } while((counter - incrementer) != -1); // if incrementer is less than the counter
  // value keep on executing the loop
  return beatlesLover
}
