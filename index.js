function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return array;
};

function johnLennonFacts(facts) {
  var newFacts = [];
  var numberOfFacts = facts.length-1;
  while (numberOfFacts >= 0) {
    newFacts.unshift(`${facts[numberOfFacts]}!!!`);
    --numberOfFacts;
  }
  return newFacts;
};

function iLoveTheBeatles(number) {
  var beatlesArray = [];
  do {beatlesArray.push("I love the Beatles!");
  ++number;
} while (number < 15);
  return beatlesArray;
}
