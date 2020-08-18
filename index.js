// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i]
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts) {
  var j = 0
  while (j < facts.length) {
    facts[j] = facts[j].concat("!!!")
    j++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15);
  return array
}
