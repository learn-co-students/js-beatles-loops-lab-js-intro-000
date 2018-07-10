// add solution here
function theBeatlesPlay(musicianArray, instrumentArray) {
  var array = []
  for(let i = 0; i < musicianArray.length; i++) {
    array.push(`${musicianArray[i]} plays ${instrumentArray[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var i = 0
  var addition = '!!!'
  while (i < array.length) {
    array[i] = array[i] + addition
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  var addition = 'I love the Beatles!'
  do {
    array.push(addition)
    number++
  } while(number < 15)
  return array
}
