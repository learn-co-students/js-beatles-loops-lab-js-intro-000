var theBeatlesPlay = function(musicians, instruments) {
  var empty = [];
    for (var i = 0; i < musicians.length; i++) {
      for (var i = 0; i < instruments.length; i++){
        empty.push(musicians[i] + " plays " + instruments[i])
      }
    }
  return empty
}

var johnLennonFacts = function(facts) {
  var empty = []
  var i = 0
  while (i < facts.length) {
    empty.push(facts[i]+"!!!")
    i++
  }
  return empty
}

var iLoveTheBeatles = function(number) {
  var empty = []
  do {
    empty.push('I love the Beatles!')
  } while (empty.length <= number && number < 15)
  return empty
}
