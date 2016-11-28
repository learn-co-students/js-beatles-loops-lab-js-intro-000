function theBeatlesPlay(musicians, instruments) {
  var musiciansPlays = []
  var arrayMusicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
  var arrayInstruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

  for(var i = 0; i < arrayInstruments.length; i++) {
    musiciansPlays.push(arrayMusicians[i] + " plays " + arrayInstruments[i])
  }
  return musiciansPlays
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(facts) {
  var exclamationFacts = []
  var i = 0
  while(i < facts.length) {
    exclamationFacts.push(facts[i] + "!!!")
    i++
  }
  return exclamationFacts
}

function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number++;
  } while(number < 15)
  return newArray
}
