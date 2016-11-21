var musArray = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var insArray = ["Guitar", "Base Guitar", "Lead Guitar", "Drums"]

// Create a function theBeatlesPlay, which accepts two parameters
// an array of musicians and
// an array of instruments.
function theBeatlesPlay(musArray, insArray){

// The body of the function should create
// an empty array stored in a variable
var empArray = []


// The function should also contain a for loop
// which loops over the array of musicians.
for (let n = 0 ; n <=4 ; n++) {

// The first time through the loop, the body
// of the loop should create a string using
// the first index of the musicians array and
// the first index of the instruments array
  if (n < 4)
  empArray.push(`${musArray[n]} plays ${insArray[n]}`)
// "John Lennon plays guitar". This string
// should be added to the empty array you created.
// The loop should make the same sentence for every
// member of the musicians array. The function should
// return the array of new strings.
} return empArray



}


//Create a function johnLennonFacts.
//This function will accept one argument,
// an array of facts about John Lennon
// (note that it might not be exactly
// the following facts):
function johnLennonFacts(facts){

// Use a while loop to loop over the facts array
// and add "!!!" to the end of every fact.
// The function should return an array of strings
// with exclamation points.
var facts2 = []
let countdown = 5
while (countdown >= 1) {
 facts2.unshift(`${facts[--countdown]}!!!`)
} return facts2
}
