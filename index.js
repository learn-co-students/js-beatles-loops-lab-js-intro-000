function theBeatlesPlay(musicianArr, instrumentsArr) {
  var array = []
  for (let i = 0; i < musicianArr.length; i++) {
    array.push(musicianArr[i] + ' plays ' + instrumentsArr[i])
  }
  return array
}

function johnLennonFacts(facts) {
  var i = facts.length - 1
  while (i >= 0) {
    facts[i] = facts[i] + '!!!'
    --i
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15)
  return array
}
