// add solution here
function theBeatlesPlay (musicians, instruments) {
  var newArray = [], i = 0
  for (i = 0; i < musicians.length; i++) {
      newArray.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return newArray
}

function johnLennonFacts (arrayFacts) {
  var i = 0, newArray = []
  while (arrayFacts[i]) {
    newArray.push(`${arrayFacts[i]}` + '!!!')
    i ++
  }
  return newArray
}

function iLoveTheBeatles (number) {
  var newArray = [], i = 0
    do {
      newArray.push('I love the Beatles!')
      number ++;
    } while (number < 15);
  return newArray
}
