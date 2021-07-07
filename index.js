// add solution here
function theBeatlesPlay(musicians, instruments) {
var newArray = [];
  for (var counter = 0; counter < musicians.length; counter++) {

    newArray.push(`${musicians[counter]} plays ${instruments[counter]}`);
}
  console.log(newArray);
  return newArray
}

function johnLennonFacts(facts) {
  var factArray = [];
  var counter = 0 ;
  while (counter < facts.length) {
    factArray.push(facts[counter] + "!!!");
    (counter++);
    }
  return factArray;
}

function iLoveTheBeatles(number) {
var newArray = [];
    do {
  newArray.push("I love the Beatles!");
  (number++);
} while (number < 15)
return newArray;
}
