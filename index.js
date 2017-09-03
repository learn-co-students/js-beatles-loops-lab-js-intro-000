function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}

function johnLennonFacts(facts) {
  var n = facts.length;
  while(n > 0) {
    --n;
    facts[n] = `${facts[n]}!!!`
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = [];
  var i = 0;
  do{
    array[i] = 'I love the Beatles!';
    i++;
  } while(i <= n && n < 15);
  return array
}
