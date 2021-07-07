// add solution here
function theBeatlesPlay(players, instruments) {
    var Beatles = [];
    for (var i=0; i < players.length; i++) {
        Beatles.push(players[i] + " plays " + instruments[i]);
    }
    return Beatles;
}

function johnLennonFacts(facts) {
  var results = [];
  var i = 0;
  while (i < facts.length) {
    results.push(facts[i] + "!!!");
    i++;
  }
  return results;
}


 function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
