function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (var i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + ` plays ` + instruments[i])
  }
  return empty
}
function johnLennonFacts(facts){
var exclamation = []
var i = 0
  while (i < facts.length) {
    exclamation.push(facts[i] + `!!!`)
    i++
  }
  return exclamation
}
function iLoveTheBeatles(n){
  var love = [];
  do {
    love.push("I love the Beatles!")
    n++
  } while (n < 15);
  return love
}
