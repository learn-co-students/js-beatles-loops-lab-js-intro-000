function theBeatlesPlay(musicians, instruments) {
  var plays = [];
  for (let i = 0; i < musicians.length; i++) {
    plays[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return plays;
}

function johnLennonFacts(facts) {
  let i = facts.length - 1;
  while (i >= 0) {
    facts[i] += "!!!";
    i-=1;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n+=1;
  } while (n < 15)
  return array;
}
