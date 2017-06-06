function theBeatlesPlay(musicians, instruments) {
  var newArray = [];

  for(var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray;
};


function johnLennonFacts(facts) {
  var newFacts = [];

  var counter = 0;
  while(counter < facts.length) {
    newFacts.push(facts[counter] + "!!!")
    counter++;
  }
  return newFacts;
};


function iLoveTheBeatles(num) {
  var numResult = [];

  do {
    numResult.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return numResult;
};
