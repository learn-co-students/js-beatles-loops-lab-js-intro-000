//(be careful about what value you set your counter variable to store. Think about what the first index of an array is)
// The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array:
//add string to empty array

//+ Create a function `theBeatlesPlay`
//accepts two parameters- an array of musicians and an array of instruments.

//body of function
//creates an empty array stored in a variable.



function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < 4; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
      }
  return arr;
}




function johnLennonFacts (facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = (facts[i] + "!!!");;
    i++;
  }

  return facts;
}




function iLoveTheBeatles (number) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!")
    number++;
  }
    while (number < 15);
  return loveArray;
  }
