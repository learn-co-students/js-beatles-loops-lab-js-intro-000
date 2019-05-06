function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 1; i < musicians.length + 1; i++) {
    array.push(`${musicians[i-1]} plays ${instruments[i-1]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var newArray = []

  var i = 0
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`)
    i++
  }
  return newArray
}

function iLoveTheBeatles(num) {
  var beatles = []
  do {
    beatles.push('I love the Beatles!')
    num++
  } while (num < 15)
  return beatles
}
