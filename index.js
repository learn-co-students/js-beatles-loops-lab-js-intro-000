function theBeatlesPlay(musicians, instrument) {
  var sentence = [];
  for (let i = 0; i < musicians.length; i++) {
    sentence.push(musicians[i] +' plays ' + instrument[i]);
  }
  return sentence;
}

function johnLennonFacts(fact) {
  var i = 0
  var facts = [];
  while (i < fact.length) {
    facts.push(fact[i] + '!!!');
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var beatles = [];
  do {
    beatles.push('I love the Beatles!');
    num++;
  } while (num < 15)
  return beatles;
}
