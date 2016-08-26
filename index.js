function theBeatlesPlay(musicians, instruments) {
  var tempArray = [];
  for (let i = 0; i < musicians.length; i++) {
    tempArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return tempArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var tempArray = [];
  while (i < facts.length) {
    tempArray.push(facts[i] + "!!!");
    i++;
  }
  return tempArray;
}

function iLoveTheBeatles(n) {
  var tempArray = [];
  do {
    if (n > 15) {
      return 'I love the Beatles!';
    } else {
      tempArray.push('I love the Beatles!');
      n--;
    }
  } while (n >= 0)
  return tempArray;
}
