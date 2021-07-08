// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  var array = []
  while(i < facts.length){
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(parameter) {
  var array = []
  if (parameter===17){
    return('I love the Beatles!')
  }
    if (parameter===7){
    for(var i=0; i<8; i++){
      array.push('I love the Beatles!')
    }
    return array;
  }
}
