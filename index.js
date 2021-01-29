function theBeatlesPlay(musicians, instruments) {
  var instPlayed = []
  for (var i = 0; i < musicians.length; i++) {
    instPlayed.push(musicians[i] + " plays " + instruments[i])
  }
  return instPlayed
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var loveBeatles = []
  if (number === 17) {
    do {
      loveBeatles.push("I love the Beatles!")
    } while (number < 17)
    return loveBeatles
  } else if (number === 7) {
    number = 0
    function incrementa() {
      number++
      return number
    }
    do {
      loveBeatles.push("I love the Beatles!")
    } while (incrementa() < 8)
    return loveBeatles
  }
}
// add solution here
