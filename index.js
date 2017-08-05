function theBeatlesPlay (musicians, instruments){
  var array = []
  for (var i = 0; i < 4; i++){
    array.push (musicians[i] + ' plays ' + instruments[i])
  }
return array
}

function johnLennonFacts(facts){
  var i = 0
  var array = []
  while (i < facts.length){
    array.push (facts[i] + '!!!')
    i++
  }
  return array
}

function iLoveTheBeatles(num){
  var muchLove = []
  do {
    muchLove.push ('I love the Beatles!')
    num++
  } while (num < 15)
  return muchLove
}
