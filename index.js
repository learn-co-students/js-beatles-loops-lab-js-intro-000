function theBeatlesPlay(musicians, instruments) {
  let band = []

  while(musicians.length > 0) {
    band.push(`${musicians.shift()} plays ${instruments.shift()}`);
  }
  return band
}

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i++) {
    facts[i] = `${facts[i]}!!!`;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  let phrases = []
  do {
    phrases.push("I love the Beatles!");
    number += 1;
  } while (number < 15);

  return phrases;
}
