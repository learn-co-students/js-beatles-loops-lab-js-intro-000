function theBeatlesPlay(musicians, instruments){
  var whoPlays = [];
  for (var i = 0; i < musicians.length; i++){
    whoPlays.push(musicians[i] + ` plays ` + instruments[i])
  }
  return whoPlays
}
function johnLennonFacts(facts){
var exclaimFacts = [];
var i = 0
while (i < facts.length) {
  exclaimFacts.push(facts[i] + `!!!`)
  i++;
}
return exclaimFacts;
}
function iLoveTheBeatles(n){
  var beatleFever = [];
  do{
    beatleFever.push(`I love the Beatles!`)
    n++
  } while (n < 15)
return beatleFever
}
