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





// Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
// Then the loop should increment the number passed in as a parameter.
// The condition of the loop should check to see that the parameter number is less than 15.
// The function should return the array with the strings "I love the Beatles!".
