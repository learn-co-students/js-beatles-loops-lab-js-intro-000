// add solution here

function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}



function johnLennonFacts(facts) {
  var results = [];
  var i = 0;
  while (i < facts.length) {
    results.push(`${facts[i]}!!!`);
    i++;
  }
  return results;
}

function iLoveTheBeatles(n) {
  var array = [];
    do {
    array.push(`I love the Beatles!`);
    n++;
  } while (n < 15);
  return array;
}



