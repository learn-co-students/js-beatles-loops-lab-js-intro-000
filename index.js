function theBeatlesPlay (musicians,instruments) {
  var musiciansPlays = []
  for (let i = 0; i < musicians.length; i++) {
    musiciansPlays.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return musiciansPlays
}

function johnLennonFacts (facts) {
  var excitingJohnLennonFacts = []
  var i = 0
  while (i < facts.length){
    excitingJohnLennonFacts.push(`${facts[i]}!!!`)

    i++;
  }
  return excitingJohnLennonFacts
}

function iLoveTheBeatles (number) {
  var beatlesLove = []
  do {
    beatlesLove.push(`I love the Beatles!`);
    number++;
  } while (number < 15);
  return beatlesLove;
}
