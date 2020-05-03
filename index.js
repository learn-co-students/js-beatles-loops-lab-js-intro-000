function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for(var i=0; i<musicians.length; i++){
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
    }
 return empty
}

function johnLennonFacts(facts){
  for(var i=0; i<facts.length; i++){
    facts[i] = `${facts[i]}!!!`;
  }
  return facts
}

function iLoveTheBeatles(a){
  var empty = [];
  do{
    empty.push('I love the Beatles!')
    a++
  }while(a<15)
  return empty
}
