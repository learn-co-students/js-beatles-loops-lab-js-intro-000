// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
 var myList = [];
  for(let i = 0; i < musicians.length; i++) {
    myList.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return myList;
}

var facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let i = 0;
    while (i < facts.length) {
       facts[i] += "!!!";
     i++;
    }
    return facts;
  }

johnLennonFacts(facts);


function iLoveTheBeatles(n) {
  let myArray = [];
  function theBeatles() {
  myArray.push("I love the Beatles!");
  }
do {
  theBeatles();
  n++;
} while (n < 15);
if (n > 15);
return myArray;
}
