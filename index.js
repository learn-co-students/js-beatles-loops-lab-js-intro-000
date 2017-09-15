function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return array
}


function johnLennonFacts(facts) {
  var counter = 0
  var newFacts = []
  while (counter < facts.length) {
    newFacts.push(`${facts[counter]}!!!`)
    counter++
  }

  return newFacts
}

function iLoveTheBeatles(number) {
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    number++
  } while (number < 15)

  return emptyArray
}
