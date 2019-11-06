// add solution here
function theBeatlesPlay(musArr, intArr) {
  var newArr = []
  for (var i = 0; i < musArr.length; i++) {
    newArr.push(musArr[i] + " plays " + intArr[i])
  }
  return newArr
}

function johnLennonFacts(factArr) {
  var newArr = []
  var count = 0
  while (count < factArr.length) {
    newArr.push(factArr[count] + "!!!")
    count++
  }
  return newArr
}

function iLoveTheBeatles(num) {
  var newArr = []
  var count = num
  do {
    newArr.push("I love the Beatles!")
    count++
  } while (count < 15)
  return newArr
}
