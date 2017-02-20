// Beatles Loops returns an array of strings containing what instruments each instrument plays
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

// Beatles Loops johnLennonFacts returns an array of strings with exclamation points
function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while(i < facts.length) {
    array.push(`${facts[i] + "!!!"}`);
    i++;
  }
  return array;
}

// Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7
// Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17
function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push(`I love the Beatles!`)
    number++;
  } while(number < 15);
  return array;
}
