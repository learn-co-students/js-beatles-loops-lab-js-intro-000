function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  var i = 0;
  for (i = 0; musicians.length > i; i++) {
  var string = `${musicians[i]} plays ${instruments[i]}`;
  empty.push(string);
  }
  return empty;
}
function johnLennonFacts(fact) {
  var array = [];
  var i = 0;
  while (i < fact.length) {
  var facts = `${fact[i]}!!!`;
  array.push(facts);
  i++;
  }
  return array;
}
function iLoveTheBeatles(number) {
  var array = [];
  var string = 'I love the Beatles!'
  do {
    array.push(string);
    number++;
  } while (number < 15)
  return array
}
