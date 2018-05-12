function theBeatlesPlay(musicians, instruments) {
  var emptyString = [];
  for (var i = 0; i < musicians.length; i++){
    emptyString.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return emptyString;
}

function johnLennonFacts(facts) {
  var string = [];
  var i = 0;
  while (i < facts.length) {
    string.push(facts[i] + '!!!');
    i++;
  }
  return string;
}

function iLoveTheBeatles(num) {
  var whatever = [];
  do {
    whatever.push('I love the Beatles!')
    num++;
  } while (num < 15)
  return whatever;
}
