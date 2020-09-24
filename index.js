function theBeatlesPlay(musicians, instruments) {
  var i = []
  for (let n = 0; n < musicians.length; n++) {
    i.push(`${musicians[n]} plays ${instruments[n]}`);
    }
  return i
}

function johnLennonFacts(facts) {
  var i = 0
  var n = []
  while (facts.length > i) {
    n.push(`${facts[i]}!!!`)
        i+=1
  }
  return n
}

function iLoveTheBeatles(num) {
  var i = []
  do {
  i.push("I love the Beatles!")
      num++
  }
  while (num < 15);
  return i
}
