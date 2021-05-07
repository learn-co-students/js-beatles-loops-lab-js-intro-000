// add solution here
let targetArray = [];
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay() {
for (let i=0; i < musicians.length;i++) {
  targetArray.push(`${musicians[i]} plays ${instruments[i]}`);
}
return targetArray;
}

const lennonFactList = ["He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"];

var counter = -1;
var incrementCounter = () => {counter++;};

function johnLennonFacts(array) {
  let newArray = [];
  for (let i = 0;i<array.length;i++) {
    newArray.push(`${array[i]}!!!`);
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  let newArray = [];
  var counter = 15-num;
  do {
    newArray.push("I love the Beatles!");
    counter--;
  } while (counter > 0);
  return newArray;
}
