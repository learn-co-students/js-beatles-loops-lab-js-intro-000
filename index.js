function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesArray;
}

function johnLennonFacts(facts) {
  let counter = 0;
  while (counter < facts.length) {
    facts[counter] = `${facts[counter]}!!!`;
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var loveBeatlesArray = [];
  do {
    loveBeatlesArray.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return loveBeatlesArray;
}
