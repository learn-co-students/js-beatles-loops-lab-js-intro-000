function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for (let i = 0; i<musicians.length; i++ ){
    empty[i] = musicians[i]+' plays '+instruments[i]
  }
  return(empty)
}

function johnLennonFacts(facts){

  let i = facts.length
  while(i>0){
  facts[i-1] = facts[i-1]+'!!!'
--i;
}

return(facts);
}

function iLoveTheBeatles(number){
var empty =[]

do{
  empty.push('I love the Beatles!')
  ++number
}while(number<15);
return(empty)
}
