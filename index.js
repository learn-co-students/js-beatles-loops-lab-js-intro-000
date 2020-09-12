// add solution here
function theBeatlesPlay(musicians, instruments) {
  var a = []

  for (let i = 0; i < musicians.length; i++) {
    a[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return a
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var j = 0
  var factsExclamation = []
  while (j < facts.length) {
    factsExclamation[j] = `${facts[j]}!!!`
    j++
  }
  return factsExclamation
}

function iLoveTheBeatles(n) {
  var r = []
  do {
    r.push("I love the Beatles!");
    n++
  } while (n < 15);
  return r
}
