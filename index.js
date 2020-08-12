// add solution here
function theBeatlesPlay(musicians, instruments) {
  var out = [];
  for (let i=0; i < musicians.length; i++) {
    out.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return out;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let i = 0;
  var array = [];
  while(i < facts.length) {
    array.push(`${facts[i]}!!!`);
    ++i;
  }
  return array;
}

function iLoveTheBeatles(n) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return array;
}
