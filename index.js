function theBeatlesPlay(musicians, instruments){
  var plays = [];
  for (let i = 0; i < 4; i++){
    ///here you add strings to the plays array from musicians and instruments
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays
}

// this is a while loop
function johnLennonFacts(facts){
  var i = 0;
  var myArray = [];
  while ( i < facts.length){
    myArray.push(facts[i] + '!!!')
    i++
  };
  return myArray
}

// Do While Loop Syntax do {[loopBody];} while ([condition]);
//+ Create a function `iLoveTheBeatles` which accepts a number as a parameter.
//The body of the function should create a variable that stores an empty array.
//Then, implement a do-while loop inside the function that adds `"I love the Beatles!"`
//to the empty array. Then the loop should increment the number passed in as a parameter.
//The condition of the loop should check to see that the parameter
//number is less than `15`. The function should return the array with the strings `"I love the Beatles!"`.

function iLoveTheBeatles(number){
  var myArray = [];
  do{
    myArray.push("I love the Beatles!");
    number++
  }
  while(number < 15);
  return myArray;
}
