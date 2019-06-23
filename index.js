// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (let i = 0; i < musicians.length; i++){
      emptyArray.push(musicians[i] + " plays " + instruments[i])
    } return emptyArray;
}

function johnLennonFacts(array){
  let result = [];
  let i = 0;
  while (array.length > i){
    result.push(array[i] + '!!!')
    i++;
  }
  return result;
}

function iLoveTheBeatles(num){
  let newArray = [];
  do{
    newArray.push('I love the Beatles!');
    num++;
  } while (num < 15)
  return newArray;
}
/*Create a function iLoveTheBeatles which accepts a number as a parameter.
The function should create a variable that stores an empty array.
Implement a do-while loop inside the function that adds "I love the Beatles!"
to the empty array.
The loop should then increment the number passed in as a parameter. The condition
of the loop should check to see that the parameter number is less than 15.
It should contain a number of strings that represents the difference between
the input number and 15.
Return the array with the strings "I love the Beatles!".*/
