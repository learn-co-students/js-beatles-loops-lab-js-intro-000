function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (var i=0; i < musicians.length; i++ ){
  empty.push(musicians[i] + " plays " + instruments[i])
}
return empty
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {array.push("I love the Beatles!")
n++
 } while (n < 15)
 return array
}
