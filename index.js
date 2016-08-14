function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var sentences = []

  for (var i = 0; i < musiciansArr.length; i++) {
    sentences.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`)
  }

  return sentences
}

function johnLennonFacts(factsArr) {
  var excitingFacts = []

  while (factsArr.length > 0) {
    excitingFacts.push(`${factsArr.shift()}!!!`)
  }

  return excitingFacts
}

function iLoveTheBeatles(num) {
  var loveArr = []

  do {
    loveArr.push("I love the Beatles!")
    num += 1
  } while (num < 15)

  return loveArr
}
