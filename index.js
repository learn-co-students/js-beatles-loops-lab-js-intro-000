// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++){
    var word = `${musicians[i]} plays ${instruments[i]}`
    array.push(word)
  }
  return array
}

function johnLennonFacts (facts) {
  var empty = []
  var i = 0
  while ( i < facts.length){
  var add = `${facts[i]}!!!`
  empty.push(add)
  i++
  }
  return empty
}

function iLoveTheBeatles (n){
  var empty = []
  do {
    empty.push("I love the Beatles!")
    n++
  }while(n < 15)
  return empty
}
