function theBeatlesPlay(musicians, instruments) {
  let playedInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    playedInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playedInstruments;
}

function johnLennonFacts(facts) {
  var factsArr = [];
  var c = 0;
  while (c < facts.length) {
    factsArr.push(facts[c] + "!!!");
    c++;
  }
  return factsArr;
}

function iLoveTheBeatles(n) {
  var results = [];
  do {
     results.push("I love the Beatles!");
     n++;
  } while (n < 15);
  return results;
}
