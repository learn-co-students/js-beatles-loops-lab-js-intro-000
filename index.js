function theBeatlesPlay(musicians, instruments){
  const array = []

    for (let i = 0; i < 4; i++){
        array.push(`${musicians[i]} plays ${instruments[i]}`)
       }

    return array
}

function johnLennonFacts(facts){
const factsAloud = []

  let i = 0
  while (i  < facts.length) {
    factsAloud.push (`${facts[i]}!!!`)
        i++
  }
   
  return factsAloud
}

function iLoveTheBeatles(n){
  const calls = []

    do {
      calls.push('I love the Beatles!')
      n++

  }  while (n < 15)

  return calls
}