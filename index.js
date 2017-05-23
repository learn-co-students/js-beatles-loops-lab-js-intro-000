function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts) {
  var modFacts = [];
  var num = 0
  while (num < facts.length) {
    modFacts.push(facts[num] + "!!!");
    num++
  }
  return modFacts;
}

function iLoveTheBeatles(num) {
  var result = [];
  do {
    result.push('I love the Beatles!');
    num++
  } while (num < 15);
  return result;
}
