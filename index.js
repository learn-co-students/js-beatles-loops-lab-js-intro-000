// add solution here
  function theBeatlesPlay(musicians, instruments) {
    let beatles = []
    for (let i = 0; i < musicians.length; i++) {
      beatles.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return beatles
  }

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var empty = []
  do {
    empty.push("I love the Beatles!")
    num++
  }while(num < 15)
  return empty
}
