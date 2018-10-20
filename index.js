function theBeatlesPlay(musicians, instruments) {
  const beatles = [];

  for (let i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  const unknownFacts = [];

  let i = 0;
  while (i < facts.length) {
    unknownFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return unknownFacts;
}

function iLoveTheBeatles(n) {
  const empty = [];

  do {
    empty.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return empty;
}
