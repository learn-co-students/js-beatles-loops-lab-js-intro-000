// add solution here

var empty = [];

// for loop
function theBeatlesPlay(musicians, instruments) {
 for (let i = 0; i < musicians.length; i++){
   empty.push(musicians[i] + " plays " + instruments[i]);
 }
  return empty;
}



// while loop
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 0;
  var newArray = [];
  
  while (i < facts.length) {
    newArray.push(facts[i] + '!!!');
    i++;
 
  }  return newArray;
}




// do while loop

function iLoveTheBeatles(num) {
  var array = [];
  do {
     num++;
     array.push('I love the Beatles!');
  } while (num < 15);{
  return array;
  }   
}