// add solution here
function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for(var i = 0; i < musicians.length; i++) {
    band.push(musicians[i] + " plays " + instruments[i]);
  }
  return band;
};

function johnLennonFacts(facts) {
  var glasses = [];
  var i = 0;
  while(i < facts.length) {
    glasses.push(facts[i] + "!!!");
    i++;
  }
  return glasses;
};

function iLoveTheBeatles(num) {
  var beat = [];
  do {
    beat.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return beat;
};
