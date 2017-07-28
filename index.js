function theBeatlesPlay(musicians, instruments){
  var musiciansInstruments = []
  for (var i = 0; i < musicians.length; i++){
    musiciansInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansInstruments
}

function johnLennonFacts(facts){
  var lennonFacts = []
  while (facts.length > 0) {
    lennonFacts.push(`${facts.shift()}!!!`)
  }
  return lennonFacts
}

function iLoveTheBeatles(number){
  //console.log(number)
  var sentance = []
  do {
    sentance.push("I love the Beatles!")
  } while (number < 15 && sentance.length <= number);
  //console.log(sentance)
  return sentance
}
