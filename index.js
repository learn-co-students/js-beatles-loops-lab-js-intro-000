function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (var i = 0; i < players.length; i++) {
    allPlayers.push(players[i] + " plays " + instruments[i]);
  }
  return allPlayers;
}

function johnLennonFacts(facts) {
  var johnLennonFacts = [];
  let i = 0;
  while (i < facts.length) {
    johnLennonFacts.push(`${facts[i]}!!!`)
    i++
  }
  return johnLennonFacts
}

function iLoveTheBeatles(number) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!")
    number++
  }
  while(number < 15)
   return beatles
}