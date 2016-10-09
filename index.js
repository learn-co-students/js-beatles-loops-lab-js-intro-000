function theBeatlesPlay(musicians, instruments) {
  var myArray = new Array();

  for (let i = 0; i < musicians.length; i++) {
    myArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return myArray;
}

function johnLennonFacts(lennonFacts) {
  var newFacts = new Array();
  var i = 0;
  while (i < lennonFacts.length) {
    newFacts.push(lennonFacts[i] + "!!!");
    i++
  }
  return newFacts;
}

function iLoveTheBeatles(myNumber) {
  var myArray = new Array();
  do {
    myArray.push("I love the Beatles!");
    myNumber++
  } while (myNumber < 15);
  return myArray;
}
