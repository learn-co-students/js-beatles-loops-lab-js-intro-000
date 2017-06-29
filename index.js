function theBeatlesPlay(array1, array2) {
  var facts = [];

  for (var i = 0; i < array1.length; i++) {
    facts[i] = array1[i] + " plays " + array2[i]
  }

  return facts
}

function johnLennonFacts(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] += "!!!"
  }

  return array
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push("I love the Beatles!")
    n++
  } while (n < 15)

  return love
}
