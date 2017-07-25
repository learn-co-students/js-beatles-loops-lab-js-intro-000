function theBeatlesPlay(musicians, instruments) {
//The body of the function creates an empty array stored in a variable(arr).
  const arr = []

//The function should also contain a for loop which loops over the array of musicians.
  for (let i = 0, l = musicians.length; i < l; i++) {
//The first time through the loop,
//the body of the loop should create a string using the first index of the musicians array
//and the first index of the instruments array: "John Lennon plays guitar".

    arr.push(`${musicians[i]} plays ${instruments[i]}`)
//This string should be added to the empty array you created.
//The loop should make the same sentence for every member of the musicians array.

  }

//The function returns the array of new strings.
  return arr
}


//Create a function johnLennonFacts.
// This function will accept one argument, an array of facts about John Lennon
function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  // Use a while loop to loop over the facts array and add "!!!" to the end of every fact.
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
// The function should return an array of strings with exclamation points.
  return shoutedFacts
}

//Create a function iLoveTheBeatles which accepts a number as a parameter.
function iLoveTheBeatles(n) {
//The body of the function should create a variable that stores an empty array.
  const array = [];

//Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
  do {
    array.push("I love the Beatles!")
//Then the loop should increment the number passed in as a parameter.
  n++
}  while (n < 15) {
//The condition of the loop should check to see that the parameter number is less than 15.

  }return array
//The function should return the array with the strings "I love the Beatles!".
}
