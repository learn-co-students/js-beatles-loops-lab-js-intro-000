function theBeatlesPlay(musicians, instruments) {
  var musiciansToInstruments = []
  for (var i = 0; i < musicians.length; i++) {
      var m1 = musicians[i]
      var i1 = instruments[i]
      musiciansToInstruments.push(m1 + " plays " + i1)
  }
  return musiciansToInstruments
}

function johnLennonFacts(array){
  var newFacts = []
  var i = 0
  while ( i < array.length) {
    newFacts.push(array[i] + "!!!"); i++
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  var h = [];
  do {
    h.push('I love the Beatles!'); number++
  } while (number < 15)

  return h
  }
