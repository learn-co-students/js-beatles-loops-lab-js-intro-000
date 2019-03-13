function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (let i = 0; i < musicians.length; i++ )
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  return emptyArray
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var emptArray = []
  do {
    emptArray.push("I love the Beatles!")
    num++
  } while (num < 15)
  return emptArray
}
