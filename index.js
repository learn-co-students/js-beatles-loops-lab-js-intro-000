var theBeatlesPlay = (musicians, instruments) => {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

var johnLennonFacts = (array) => {
  var i = 0
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    i++
  }
  return array
}

var iLoveTheBeatles = (n) => {
  var array = []
  do {
    array.push("I love the Beatles!")
    n--
  } while (n >= 0 && n < 15)
  return array
}
