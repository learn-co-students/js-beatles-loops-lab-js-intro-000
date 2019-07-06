// add solution here

var theBeatlesPlay = (musicians, instruments) => {
  var resultArray = []

  for (let i = 0; i < musicians.length; i++) {
    resultArray[i] = musicians[i] + " plays " + instruments[i]
  }

  return resultArray
}

var johnLennonFacts = (facts) => {
  let i = 0
  var exclamations = []

  while (i < facts.length) {
    exclamations[i] = facts[i]+"!!!"
    i++
  }

  return exclamations
}

var iLoveTheBeatles = (number) => {
  var loveArray = []

  do {
    loveArray.push("I love the Beatles!")
    number++
  } while (number < 15)

  return loveArray
}
