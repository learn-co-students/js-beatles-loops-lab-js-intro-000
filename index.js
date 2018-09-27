function theBeatlesPlay(musicians, instruments) {
  var sentences = []
  for (var i = 0; i < musicians.length; i++) {
    var sentence = `${musicians[i]} plays ${instruments[i]}`
    sentences.push(sentence)
  }
  return sentences
}

function johnLennonFacts(facts) {
  var ex_facts = []
  var i = 0
  while (i < facts.length) {
    ex_facts.push(facts[i] + "!!!");
    i ++
  }
  return ex_facts
}

function iLoveTheBeatles(num) {
  var sentences = []
  var i = num
  if (i > 15) {
    sentences.push("I love the Beatles!")
  } else {
    do {
      sentences.push("I love the Beatles!")
      i += 1
    } while (i < 15);
  }
  return sentences
}
