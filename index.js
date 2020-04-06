// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
      facts[i] = `${facts[i]}!!!`
      i = i + 1;
  }
  return facts
}

function iLoveTheBeatles(number) {
  var newarray = [];
  let i = number;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    newarray.push("I love the Beatles!");
  } while (incrementVariable() < 15);
  return newarray
}
