function theBeatlesPlay(musicians,instruments) {
  var newArray = []
//  var newString
  for (var  i = 0; i < musicians.length; i++) {
//    newString = `${musicians[i]} plays ${instruments[i]}`
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
//    console.log(newArray)
  }
  return newArray
}

function johnLennonFacts(facts) {
  var i = 0
  var newArray = []
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`)
    i++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var i = number
  var newArray = []
  do {
    newArray.push('I love the Beatles!')
    i++
  }
  while (i<15)
  return newArray
}
