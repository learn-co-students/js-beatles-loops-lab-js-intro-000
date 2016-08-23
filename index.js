function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + ' plays ' + instruments[i])
  }
  return empty
}

function johnLennonFacts(facts) {
  let i = 0;
  let fact = [];
  while (i < facts.length) {
    fact[i] = facts[i] + "!!!";
    i++
  }
  return fact
}

function iLoveTheBeatles(number) {
  var empty = [];
    do {
      empty.push("I love the Beatles!");
      number++
    } while (number < 15)
  return empty
}
