// add solution here
function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return array;
}
