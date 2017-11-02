var iLoveTheBeatles = i => {
  var array = [];
    do {
      array.push("I love the Beatles!");
      i++;
    }
  while (i < 15);
  return array;
};

var theBeatlesPlay = (musicians, instruments) => {

  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
};

var johnLennonFacts = facts => {
  var array = [];

  var i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++;
  }
  return array;
}
