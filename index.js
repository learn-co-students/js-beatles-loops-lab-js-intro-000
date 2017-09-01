function theBeatlesPlay(musicians, instruments) {
  var s = [];
  for(var i = 0; i < musicians.length; i++) {
    s.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return s;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var s = [];
  do {
    s.push('I love the Beatles!');
    num++;
  } while(num < 15)
  return s;
}
