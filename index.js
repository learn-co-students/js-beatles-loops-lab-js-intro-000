function theBeatlesPlay(musicians, instruments) {
  var play = [];
  for (var i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return play;
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts[i].concat("!!!");
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
}
