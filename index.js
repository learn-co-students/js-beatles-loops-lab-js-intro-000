function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return(empty);
}

function johnLennonFacts(facts) {
  var strings = [];
  for (var i = 0; i < facts.length; i++) {
    strings.push(facts[i] + "!!!" )
}
  return(strings);
}

function iLoveTheBeatles(number) {
  var empty_array = [];
  do {
    empty_array.push("I love the Beatles!")
    number++;
  } while (number < 15)
  return empty_array;
}
