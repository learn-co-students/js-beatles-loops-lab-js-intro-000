function theBeatlesPlay(musicians, instruments) {
  var myArray = new Array();

  for (var i = 0; i<musicians.length; i++) {
    var myString = musicians[i] + " plays " + instruments[i];
    myArray.push(myString);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  let nFacts = 0;
  var myArray = new Array();

  while (nFacts < facts.length) {
    var myString = facts[nFacts] + "!!!"
    myArray.push(myString);
    nFacts++;
  }
  return myArray;
}

function iLoveTheBeatles(n) {
  var myArray = new Array();

  do {
    myArray.push("I love the Beatles!");
    n++;
  } while (n<15);


  return myArray;
}
