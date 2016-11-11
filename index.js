function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var newString = musicians[i] + ' plays ' + instruments[i];
    emptyArray.push(newString);
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var emptyArray = [];
  var i = 0
  while(i < facts.length) {
    var string = facts[i] + '!!!'
    emptyArray.push(string)
    i++
  }
  return emptyArray
}

function iLoveTheBeatles(n) {
  var emptyArray = [];
  do {
    emptyArray.push('I love the Beatles!')
    n++
  }
  while(n < 15);
  return emptyArray
}
