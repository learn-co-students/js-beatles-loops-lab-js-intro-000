// add solution here
function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (var i=0; i < players.length; i++) {
    allPlayers.push(players[i] + " plays " + instruments[i]);
  }
  return allPlayers;
}

function johnLennonFacts(facts) {
  var factString = [];
  var index = 0;
  while (facts.length > factString.length) {
    factString.push(facts[index++] + "!!!")
  };
  return factString
}

function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push("I love the Beatles!")
    number++
  } while (number < 15);
  return empty
}
