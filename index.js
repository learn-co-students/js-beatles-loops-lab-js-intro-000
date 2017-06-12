function theBeatlesPlay(musicians, instruments){
  // new array to store concat strings
  const arr = []

// initialisaton can take multiple params
  for(let i = 0, l = musicians.length; i < l; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts){
  const arr = []

  // create counter var to break true param in while
  let factCount = 0

  while (factCount < facts.length) {
    arr.push(`${facts[factCount]}!!!`)
    factCount++
  }
  return arr
}

function iLoveTheBeatles(number){
  const arr = []

  do {
    arr.push('I love the Beatles!')
    number++
  } while (number < 15);

  return arr
}
