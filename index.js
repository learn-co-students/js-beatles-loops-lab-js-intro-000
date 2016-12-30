function theBeatlesPlay(musicians, instruments) {
  var beatles = [];

  for (var i = 0; i < musicians.length; i++ ) {
    beatles[i] = `${musicians[i]} plays ${instruments[i]}`
  }

  return beatles
}

function johnLennonFacts(facts) {
  const shoutedFacts = [];

  let i = 0;
  while (i < facts.length) {
    shoutedFacts[i] = `${facts[i]}!!!`
    i++;
  }
  return shoutedFacts;
}

function iLoveTheBeatles(n) {
  const arr = [];
  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)
  return arr;
}
