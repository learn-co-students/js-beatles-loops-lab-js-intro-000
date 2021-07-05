function theBeatlesPlay(musicians, instruments) {
  var theBeatles = new Array();

  for (let i = 0; i < 4; i += 1) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theBeatles
}

function johnLennonFacts(johnLennonFacts) {
  var excitedFacts = new Array()
  let i = 0
  while (i < johnLennonFacts.length) {
    excitedFacts.push(johnLennonFacts[i] + "!!!");
    i += 1
  }
  return excitedFacts
}

function iLoveTheBeatles(n) {
  var iLoveTheBeatles = [];
  do {
    iLoveTheBeatles.push("I love the Beatles!");
    n += 1;
  } while (n < 15);
  return iLoveTheBeatles;
}
