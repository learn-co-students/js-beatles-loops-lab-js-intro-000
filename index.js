function theBeatlesPlay (musicians, instruments) {
  var band = [];
  for (var i=0; i < musicians.length; i++) {
    band.push(musicians[i] + " plays " + instruments[i]);
  }
  return band;
}

function johnLennonFacts (facts) {
  var i = 0;
  var finalFacts = [];
  while (i < facts.length) {
    finalFacts.push(facts[i] + "!!!");
    i++
  }
  return finalFacts;
}

function iLoveTheBeatles (number) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    number++
  } while (number < 15);
  return love;
}
