// add solution here
// let array = []
//
//
//   function theBeatlesPlay(musarray, insarray){
//   for(let i = 0; i < musarray.length; i++){
//   array[musarray] = insarray
//   array.push(i)
//   }
//   return array
// }

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
  	array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(facts){
var aria = [];
var i = 0
while ( i < facts.length){
  aria.push(facts[i]+ '!!!')
  i++
  }
  return aria
}


function iLoveTheBeatles(num){
  var hey = []
  do{
    hey.push("I love the Beatles!")
    num++
  } while (num < 15)
    return hey
}


// function doWhileLoop(num){
//   let i = 0;
//
//   function incrementVariable() {
//     i = i + 1;
//     return i;
//   }
//
//   do {
//     console.log("I run once regardless");
//   } while (incrementVariable() < num);
// }
