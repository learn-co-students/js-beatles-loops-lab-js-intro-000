// add solution here


function theBeatlesPlay(musicians, instruments){
  var array = []
  for ( let i = 0; i < musicians.length; i++ ){
    array.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  for (let i = 0; i < facts.length; i++){
    array.push(`${facts[i]}!!!`)
  }
  return array
}
/** The function should create a variable that stores an empty array.
* Implement a do-while loop inside the function that adds `"I love the
  Beatles!"` to the empty array.
* The loop should then increment the number passed in as a parameter. The
  condition of the loop should check to see that the parameter number is
  less than `15`. It should contain a number of strings that represents the
  difference between the input number and `15`.
* Return the array with the strings `"I love the Beatles!"`.*/
function iLoveTheBeatles(num){
  var empty = []
  do {
    empty.push("I love the Beatles!")
  } while (++num < 15)
  return empty
}
