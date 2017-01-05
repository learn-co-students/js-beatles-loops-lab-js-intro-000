function theBeatlesPlay(aMusician, aInstruments) {
  var aTemp = []
  for(var i = 0; i < aMusician.length; i++) {
    aTemp.push(`${aMusician[i]} plays ${aInstruments[i]}`)
  }
  return aTemp
}

function johnLennonFacts(aFacts) {
  var i = 0
  var aTemp = []
  while (i < aFacts.length) {
    aTemp.push(`${aFacts[i]}!!!`)
    i++
  }
  return aTemp
}

function iLoveTheBeatles(number) {
  var aTemp = []
  do {
    aTemp.push('I love the Beatles!')
    number++
  } while (number < 15)
  return aTemp
}