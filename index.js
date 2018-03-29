var theBeatlesPlay = function(musicians, instruments) {
  var plays = [];
  for (let i = 0; i < musicians.length; i++) {
    plays.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return plays;
};

var johnLennonFacts = function(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }

  return facts;
};

var iLoveTheBeatles = function(n) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return array;
};
