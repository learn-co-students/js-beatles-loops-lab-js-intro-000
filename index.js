function theBeatlesPlay(musicians, instruments) {
  var blue = []
  for (var i = 0; i < musicians.length; i++) {
    blue.push(musicians[i] + ' plays ' + instruments[i])
  }
  return blue
}

function johnLennonFacts(facts) {
  var count = 0
  while (count < facts.length) {
    facts[count] = facts[count] + '!!!'
    count++
  }
  return facts
}

function iLoveTheBeatles(number){
  var arr = []
  do {
    arr.push("I love the Beatles!")
    number++
  } while (number < 15)

  return arr

}
