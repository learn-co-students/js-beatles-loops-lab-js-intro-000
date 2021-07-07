// add solution here
var foo = [];

function theBeatlesPlay(mus, inst) {
  for (let i = 0; i < mus.length; i++) {
  foo.push(`${mus[i]} plays ${inst[i]}`);
  }
  return foo;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and a boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(facts) {
  const arr = [];
  let i = 0
  while (facts.length > i) {
    arr.push(`${facts[i]}!!!`)
    i++
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var strings = [];

  do {
    strings.push('I love the Beatles!');
    num++
  } while (num < 15);
  return strings
}
