function theBeatlesPlay(musicians, instruments) {
  var array =[]

  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(array) {
  var exclamation = []

  var i = 0
  while (i <array.length) {
    exclamation.push(`${array[i]}!!!`)
    i++
  }

  return exclamation
}

function iLoveTheBeatles(x) {
  var arrayTwo = []

  do {
    arrayTwo.push('I love the Beatles!')
    x++
  } while (x < 15)

    return arrayTwo
}
