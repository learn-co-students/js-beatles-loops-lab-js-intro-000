// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length;  i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

const facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'
];

function johnLennonFacts(facts) {
  let i = 0;
  var exclaimedFacts = [];
  while (i < facts.length) {
    exclaimedFacts.push(`${facts[i]}!!!`);
    i += 1
  }
  return exclaimedFacts
}

function iLoveTheBeatles(n) {
  var emptyArray = []

  do {
    emptyArray.push('I love the Beatles!');
    n++;
  }
  while (n < 15)
  return emptyArray
}
