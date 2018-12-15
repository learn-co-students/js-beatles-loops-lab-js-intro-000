// add solution here
function theBeatlesPlay (musicians, instruments) {
  var counter = []
  for (let i = 0; i < musicians.length; i++) {
  counter.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return counter
}

function johnLennonFacts (facts) {
  var factstest = []
  let i = 0
  while (i < facts.length) {
    factstest.push(`${facts[i]}!!!`)
    i++
  }
  return factstest
}


function iLoveTheBeatles (number) {
  var array = []
  do {
    array.push('I love the Beatles!')
    number++
  } while (number < 15)
  return array
}
