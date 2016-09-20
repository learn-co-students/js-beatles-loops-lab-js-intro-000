function theBeatlesPlay(musicians, instruments) {
  var beatlesIndex = []
  for (let i = 0; i < musicians.length; i++) {
    beatlesIndex.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesIndex
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
  	facts[i] = facts[i] + "!!!"
  	i++;
  }
  return facts
}

function iLoveTheBeatles(number) {
	var loveBeatles = []
	do {
		loveBeatles.push("I love the Beatles!")
		number++
	} while (number < 15)
	return loveBeatles
}
