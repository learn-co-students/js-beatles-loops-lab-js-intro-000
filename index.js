function theBeatlesPlay(musicians, instruments) {
  var players = [];
  for (var i = 0; i < musicians.length; i++) {
    players.push(musicians[i] + " plays " + instruments[i]);
  }
  return players;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while  (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var group = [];
  do {
    group.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return group;
}