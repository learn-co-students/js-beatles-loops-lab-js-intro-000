const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = new Array();
  for (var i = 0; i < musicians.length; i++) {
  beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return beatlesArray;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var loudFacts = new Array();
  var i = 0;
  while (i < facts.length) {
    loudFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return loudFacts;
}


function iLoveTheBeatles(number) {
  var beatlesArray = new Array();
  var i = 0;
  do {
    number++;
    beatlesArray.push("I love the Beatles!");
  } while (number < 15);
  return beatlesArray;
}

//The body of the function should create a variable that stores an empty array. Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array. Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than 15. The function should return the array with the strings "I love the Beatles!".
