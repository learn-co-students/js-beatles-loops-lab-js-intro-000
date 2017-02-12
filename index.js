function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []

  for(var i=0; i < musicians.length; i++) {
    var newArray = `${musicians[i]} plays ${instruments[i]}`
    emptyArray.push(newArray)
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var i = 0;
  var emptyFacts = []
  while(i < facts.length) {
    var factsArray = `${facts[i]}!!!`
    emptyFacts.push(factsArray)
    i++
  }
  return emptyFacts
}

function iLoveTheBeatles(x) {
  var loveBeatle = []
  var i = 0
  do {
    x = x+1
    i++
    var addLoveBeatles = "I love the Beatles!"
    loveBeatle.push(addLoveBeatles)
  }
  while( x < 15 )
  return loveBeatle
}
