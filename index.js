function theBeatlesPlay(musicians, instruments){
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
     result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}
function johnLennonFacts(facts) {
  var i = 0;
  var result = [];
  while (i < facts.length) {
    result.push(facts[i] + "!!!");
    i++;
  }
  return result;
}
function iLoveTheBeatles(number) {
  var result = [];
  do {
    result.push("I love the Beatles!");
    number++;
  } while (number  < 15);
  return result;
}
