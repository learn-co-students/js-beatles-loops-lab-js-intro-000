function theBeatlesPlay(musicians, instruments) {
  var play = []
  for (var i = 0; i < musicians.length; i++) {
    play.push(musicians[i] + " plays " + instruments[i])
  }
  return play
}

function johnLennonFacts(facts) {
  return facts.map(function(item) {
    return item + "!!!";
  });
}

function iLoveTheBeatles(num) {
  var play = [];

  do {
    play.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return play;
}
