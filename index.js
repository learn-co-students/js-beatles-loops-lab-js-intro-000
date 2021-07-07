// add solution here
function theBeatlesPlay(musicians, instruments) {
  var plays = []
  var newstring = ``
  for (var i = 0; i < musicians.length; i++){
    newstring = `${musicians[i]} plays ${instruments[i]}`
    plays.push(newstring)
  }
  return plays
}

function johnLennonFacts(facts) {
  var exclamation = []
  var i = 0
  var text = ""
  while (facts[i]){
    text = facts[i] + "!!!"
    exclamation.push(text)
    i++
  }
  return exclamation
}

function iLoveTheBeatles(n){
  var love = []
  do {
   love.push("I love the Beatles!")
   n++
 } while (n < 15)
  return love
}
