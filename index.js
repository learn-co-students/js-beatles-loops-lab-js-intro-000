function theBeatlesPlay(musicians, instruments) {
  var players = []
 for (let i = 0; i < musicians.length; i++) {
    players.push(musicians[i] + " plays " + instruments[i])
  }
 return players
}

function johnLennonFacts(facts) {
  var newFacts=[]
  for (let i = 0; i < facts.length; i++) {
    newFacts[i] = facts[i] + "!!!"
  }
  return newFacts
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push('I love the Beatles!')
  } while (++num < 15);
  return array
}
