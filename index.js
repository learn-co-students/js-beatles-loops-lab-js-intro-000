function theBeatlesPlay(musicians, instruments) {
  var band = []

  for (var i = 0; i < musicians.length; i++){
    band[i] = musicians[i] + ' plays ' + instruments[i]
  }
  return band
}

function johnLennonFacts(facts) {
  var length = facts.length - 1
  while (length >= 0) {
    facts[length] = facts[length] + "!!!"
    --length
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.unshift("I love the Beatles!")
    num--
  } while (num >= 0 && num < 15);
  return array
}
