const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
 var synthesis = [];
 for(var i = 0; i < musicians.length; i++){
   synthesis.push(musicians[i] + " plays " + instruments[i]);
 }
 return synthesis;
}

/*The body of the function should create an empty array stored in a variable.
The function should also contain a for loop which loops over the array of musicians.
You'll want to be careful about what value you set your counter variable to store.
(Hint: Think about what the first index of an array is).
The first time through the loop, the body of the loop should
create a string using the first index of the musicians array
and the first index of the instruments array: "John Lennon plays guitar".
This string should be added to the empty array you created.
The loop should make the same sentence for every member of the musicians array.
The function should return the array of new strings.
*/
function johnLennonFacts(x){
  var loudFacts = [];
  var i = 0;
  while(i < x.length){
    loudFacts.push(`${x[i]}!!!`);
    i++;
  }
  return loudFacts;
}
/*
function johnLennonFacts(){
	const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
	];
  var loudFacts = [];
  var i = 0;
  while(i < facts.length){
    loudFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return loudFacts;
}


Use a while loop to loop over the facts array
and add `"!!!"` to the end of every fact.
The function should return an array of strings with exclamation points.
*/

function iLoveTheBeatles(number){
  var empty = [];
  
  do{empty.push("I love the Beatles!");
  number++;
  }while(number < 15);

  return empty;
}


/*
Create a function `iLoveTheBeatles` which accepts a number as a parameter.
The body of the function should create a variable that stores an empty array.
Then, implement a do-while loop inside the function that adds `"I love the Beatles!"`
to the empty array. Then the loop should increment the number passed in as a parameter.
The condition of the loop should check to see that the parameter number is less than `15`.
The function should return the array with the strings `"I love the Beatles!"`.
*/
