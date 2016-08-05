function theBeatlesPlay(musician, instrument) {
  // create empty array stored in a variable
  var arr = [];

  // for loop which loops over musicians array
  for (let i = 0; i < musician.length; i++) {
    arr.push(musician[i] + " plays " + instrument[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var exclaimedFacts = [];

  let i = 0;
  while (i < facts.length) {
    exclaimedFacts.push(facts[i] + "!!!");
    i++;
  }
  return exclaimedFacts;
}

function iLoveTheBeatles(num) {
  var arr = [];

  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return arr;
}
