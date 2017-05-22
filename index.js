function theBeatlesPlay(musicians, instruments) {
	var array = [];
	for (var i = 0; i < musicians.length; i++) {
	array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
	return array
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts [i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n = n + 1
  } while (n > 0 && n <15);
  return array
}
