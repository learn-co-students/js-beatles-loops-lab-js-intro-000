function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (let i = 0; i < musicians.length; i++) {
    band[i] = (`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}

function johnLennonFacts(array) {
  var i = 0
  var facts = []
  while (i < array.length) {
    facts[i] = `${array[i]}!!!`
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var cheer = []
  var i = 0
  do {
    cheer[i] = "I love the Beatles!"
    number++
    i++
  } while (number < 15);
  return cheer
}
