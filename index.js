function theBeatlesPlay(musician, instrument) {
  var beatlesPlay = [];
  for(var i = 0; i < musician.length; i++) {
    beatlesPlay.push(musician[i] + ` plays ` + instrument[i]);
  } return beatlesPlay;
}

function johnLennonFacts(fact) {
var johnLennonFacts = [];
let i = 0;
while(johnLennonFacts.length < fact.length) {
    johnLennonFacts.push(fact[i] + '!!!');
    i++;
  } return johnLennonFacts;
}

function iLoveTheBeatles(n) {
var iLoveTheBeatles = [];
  do {
      iLoveTheBeatles.push(`I love the Beatles!`);
      n++;
  } while(n < 15);
  return iLoveTheBeatles;
}
