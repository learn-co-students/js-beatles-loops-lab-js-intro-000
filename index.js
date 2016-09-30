function theBeatlesPlay (musiciansArray, instrumentsArray) {
  var myArray = [];
  for (var n = 0; (n < musiciansArray.length); n++) {
    var myString = musiciansArray[n] + " plays " + instrumentsArray[n];
    myArray.push(myString);
  }
  return myArray;
}



function johnLennonFacts(facts){
  var myArray = [];
  var n = 0;
  while (n < (facts.length)){
    myArray.push(`${facts[n]}!!!`);
    n++;
  }
  return myArray;
}

function iLoveTheBeatles(n){
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    n++
  } while (n < 15)
  return myArray;
}
