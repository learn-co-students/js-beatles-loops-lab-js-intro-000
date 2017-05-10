function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var counter = 0; counter < musicians.length; counter ++){
    array.push(musicians[counter] + " plays " + instruments[counter]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++
  } while (number < 15);
  return array;
}
