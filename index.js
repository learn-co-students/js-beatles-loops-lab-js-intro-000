function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = new Array();
  for (let i = 0; i < musicians.length; i++) {
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesPlay
}

function johnLennonFacts(facts) {
  let counter = 0
  while (counter < facts.length) {
    const fact = facts[counter]
    facts[counter] = `${fact}!!!`
    counter++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = new Array();
  do {
    array.push("I love the Beatles!")
    number ++
  } while (number < 15);
  return array
}
