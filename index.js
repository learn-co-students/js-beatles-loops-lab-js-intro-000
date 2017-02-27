function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (var i = 0; i < musicians.length; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return band;
}

function johnLennonFacts(facts) {
//  var newFacts = [];
  for (var i = 0; i < facts.length; i++) {
    facts[i] = `${facts[i]}!!!`;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var loves = [];
  do {
    loves.push("I love the Beatles!");
  } while (++n < 15);
  return loves;
}
