// add solution here
function theBeatlesPlay (musicians, instrument) {
  var musiciansArray = []

  for (var l = 0, i = musicians.length; l < i; l++) {
    musiciansArray.push(`${musicians[l]} plays ${instrument[l]}`)
  }
  return musiciansArray;
}
function johnLennonFacts (facts) {
  var johnLennonFacts = []
  var i = 0

  while (i < facts.length) {
    johnLennonFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return johnLennonFacts;
}
function iLoveTheBeatles(num){
var array = []
do {
  array.push("I love the Beatles!"), num++;
} while (num < 15);
return array
}
