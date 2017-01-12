function  theBeatlesPlay(musicians, instruments){
  var band = new Array();
  for (var i = 0; i <= musicians.length - 1; i++) {
    band[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return band;
}

function johnLennonFacts(facts) {
  var excitedFacts = new Array;
  var i = 0;
  while (i < facts.length) {
    //excitedFacts[i].shift(`${excitedFacts[i].pop();}` + "!!!");
    excitedFacts.push(facts[i] + "!!!");
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(number) {
  var beatlesLove = new Array;
  var counter = number;
  do {
    beatlesLove.push("I love the Beatles!");
    counter++;
  }
  while (counter < 15);
  return beatlesLove;
}
