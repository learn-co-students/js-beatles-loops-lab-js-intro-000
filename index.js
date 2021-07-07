// add solution here
var theBeatlesPlay = function(musicians, instruments){
    var array = []
    for (var i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i])
    }
    return array
}

var johnLennonFacts = function(facts){
  var array = []
  var i = 0
  while(i < facts.length){
    array.push(facts[i] + '!!!')
    i++
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
  var i = 0
  if (number > 15){
    array.push("I love the Beatles!")
  } else {
    do{
      array.push("I love the Beatles!")
      i++
    } while(i <= number)
  }
  return array
}
