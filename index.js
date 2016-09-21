function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    empty.push(string);
  }
  return empty
}

function johnLennonFacts(facts) {
  var modifiedfacts = [];
  var i = 0;
  while (i < facts.length) {
    var exclaimed = `${facts[i]}!!!`;
    modifiedfacts.push(exclaimed);
    i++;
  }
  return modifiedfacts
}

function iLoveTheBeatles(number) {
  var item = -1;
  var text = [];
  do {
    text.push("I love the Beatles!");
    item++;
  } while (item < number && number != 17);
  return text;
}
