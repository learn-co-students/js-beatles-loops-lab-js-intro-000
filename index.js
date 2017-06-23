function theBeatlesPlay(musician, instrument) {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(musician[i] + " plays " + instrument[i]);
  }
  return array;
}

function johnLennonFacts(fact) {
  var array = [];
  var i = 0;
  while (i < fact.length) {
    array.push(fact[i] + "!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
