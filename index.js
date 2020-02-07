// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array;
};

function johnLennonFacts(facts) {
  var excitedFacts = []
  let i = 0
  while(facts.length > i) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return excitedFacts
};

function iLoveTheBeatles(n) {
  var array = [];

    do {
      n++;
      array.push(`I love the Beatles!`)
    } while (n < 15);
    return array;
};
