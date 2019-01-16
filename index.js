function theBeatlesPlay(musicians, instruments) {
  var stuff = [];

  for (var i = 0; i < musicians.length; i++) {
    stuff.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return stuff;
}

function johnLennonFacts(facts) {
  var i = 0;
  var arrayWithStrings = [];

  while (i < facts.length) {
    arrayWithStrings.push(facts[i] + "!!!");
    // arrayWithStrings.push(`{facts[i]}!!!`);
    i++;
  }
  return arrayWithStrings;
}

function iLoveTheBeatles(number) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);

  return array;
}
