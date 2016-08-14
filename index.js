function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var sentences = []

  for (let i = 0, l = musiciansArr.length; i < l; i++) {
    sentences.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`)
  }

  return sentences
}

function johnLennonFacts(factsArr) {
  const excitingFacts = []

  let i = 0, l = factsArr.length
  while (i < l) {
    excitingFacts.push(`${factsArr[i]}!!!`)
    i++
  }

  return excitingFacts
}

function iLoveTheBeatles(num) {
  const loveArr = []

  do {
    loveArr.push("I love the Beatles!")
    num++
  } while (num < 15)

  return loveArr
}
