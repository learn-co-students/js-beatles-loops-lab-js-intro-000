var theBeatlesPlay = function(musicians, instruments) {
  var array = [];
  var i = 0;
  for (i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return array;
}

var johnLennonFacts = function(facts) {
  var n = 0;
  while( facts[n] ) {
    facts[n] = `${facts[n]}!!!`;
    n++;
  }
  return facts;
}

var iLoveTheBeatles = function(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array;
}
