function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (var i = 0; i < 4; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return myArray;
}
function johnLennonFacts(facts) {
  var i = 0
  while ( i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++
  };
  return facts;
 }
 function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push('I love the Beatles!');
    n++
  } while (n < 15);
  return newArray;
}
