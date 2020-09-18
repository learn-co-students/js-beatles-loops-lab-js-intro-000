function theBeatlesPlay(musicians, instruments) {
  var i = []
  for(let n = 0; n < musicians.length; n++) {
    i.push(`${musicians[n]} plays ${instruments[n]}`)
  }
  return i
}

function johnLennonFacts(facts) {
  var i = 0;
  var array = [];
  while (facts.length > i) {
  array.push(`${facts[i]}!!!`);
  i += 1;
}
  return array
}

function iLoveTheBeatles(num) {
  var array = [];
  var n = 15;
  do {
  array.push("I love the Beatles!")
  num++
} while (n > num);
  return array
}
