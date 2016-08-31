function theBeatlesPlay (musicians, instruments) {
  const array = [];

  for (let i=0; i<4; i++){
    array.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts (facts) {
  const johnFacts = []
  let i = 0
  while (i<facts.length) {
    johnFacts.push (`${facts[i]}!!!`)
    i++
  }
  return johnFacts
}

function iLoveTheBeatles(number) {
  const array = []
  do {
    array.push('I love the Beatles!')
    number++
  } while (number<15)
  return array
}
