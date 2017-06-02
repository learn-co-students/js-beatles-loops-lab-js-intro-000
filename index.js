function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  let array = [];
  while (facts.length > 0) {
    array.push(`${facts[0]}!!!`);
    facts.shift();
  }
  return array;
}

function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return array;
}
