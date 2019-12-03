function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (var i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
 return arr
}

function johnLennonFacts(facts) {
 const facts1 = []
 var i = 0
 while (i < facts.length) {
   facts1.push(`${facts[i]}!!!`)
   i++
 }
 return facts1
}

function iLoveTheBeatles(n) {
  const arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while (n < 15)
  return arr
}
