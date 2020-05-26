// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var empty = [];
  for (var i = 0; i < arrayMusicians.length; i++) {
    empty.push(arrayMusicians[i] +" " + "plays" + " " + arrayInstruments[i]);
  }
  return empty;
}
function johnLennonFacts(facts) {
  var empty = [];
  var i = 0;
  while (empty.length < facts.length) {
    empty.push(facts[i] + "!!!");
    i++;
  }
  return empty;
}

function iLoveTheBeatles(num) {
  var empty = [];
  do {empty.push("I love the Beatles!"); num += 1}
  while (num < 15);
  return empty;
}