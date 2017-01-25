function theBeatlesPlay(musicians, instruments){
  var play = [];
  for (let i = 0; i < musicians.length; i++) {
    play.push(musicians[i] + " plays " + instruments[i])
  }
  return play;
}

function johnLennonFacts(facts){
  var factz = []
  while (facts.length > 0) {
    factz.push(facts[0] + "!!!")
    facts = facts.slice(1)
  }
  return factz;
}

function iLoveTheBeatles(n){
 var luv = []
  do {
    luv.push("I love the Beatles!");
    ++n;
  } while (n < 15);
  return luv;
}