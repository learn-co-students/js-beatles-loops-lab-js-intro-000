function theBeatlesPlay(musicians, instruments) {
  var tempArr = [];

  for (var i = 0; i < musicians.length; i += 1) {
    tempArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return tempArr;
}

function johnLennonFacts(facts) {
  var i = 0;
  var factslen = facts.length;
  var newFacts = [];

  while (i < factslen) {
    newFacts.push(facts[i] + "!!!");
    i += 1;
  }

  return newFacts;
}

function iLoveTheBeatles(n) {
  var arr = [];

  do {
    arr.push("I love the Beatles!");
  } while (++n < 15);

  return arr;
}
