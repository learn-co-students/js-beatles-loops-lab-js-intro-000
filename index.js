function theBeatlesPlay (musicians, instruments) {
  var array = [];

  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {

  var theFacts = [];
  var counter = 0;

  while (counter < facts.length) {
    theFacts.push(facts[counter] + "!!!");
    counter++;
  }
  return theFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  var counter = number;
  do {
    array.push("I love the Beatles!");
    counter++;
  } while (counter < 15);
  return array;
}
