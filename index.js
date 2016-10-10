function theBeatlesPlay(musicians, instruments) {
  var returnArray = []

  for (var i = 0; i < musicians.length; i++) {
    returnArray.push(musicians[i] + " plays " + instruments[i])
  }

  return returnArray
}

function johnLennonFacts(array) {
  var returnArray = []
  var i = 0

  while (i < array.length) {
    returnArray.push(array[i] + "!!!")
    i++
  }

  return returnArray
}

function iLoveTheBeatles(number) {
  var returnArray = []

  do {
    returnArray.push("I love the Beatles!")
    number++
  } while (number < 15)

  return returnArray
}
