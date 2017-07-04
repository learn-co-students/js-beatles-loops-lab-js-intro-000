function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!'
    i++;
  }
  return facts;
}

function iLoveTheBeatles(count) {
  var array = []
  var i = 0
  do {
    array.push('I love the Beatles!')
    i++;
  } while(i <= count && count < 15);
  return array;
}