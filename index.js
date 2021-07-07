function theBeatlesPlay(musicians, instruments) {
var bmi = [];
for (var index = 0, amount = musicians.length; index < amount; index++) {
  bmi.push(`${musicians[index]} plays ${instruments[index]}`)
}
return bmi
}

function johnLennonFacts(facts) {
  var facthusiasm = [];
  var index = 0;
  while (facts.length > index) {facthusiasm.push(`${facts[index]}!!!`)
  index++
}
  return facthusiasm
}

function iLoveTheBeatles(number) {
  var howMuch = [];
  do {howMuch.push(`I love the Beatles!`); number++}
  while (number < 15);
  return howMuch
}
