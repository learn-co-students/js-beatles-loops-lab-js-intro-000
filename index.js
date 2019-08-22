function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

function johnLennonFacts(facts){
  var i = 0;
  var exclamationArray = new Array();
  while (i < facts.length) {
    exclamationArray.push(facts[i] + "!!!")
    i++;
  }
  return exclamationArray;
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}
