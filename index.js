// for loop
function theBeatlesPlay (musicians, instruments) {
  const sent = []
  for (var i = 0, x = musicians.length; i < x; i++){
  sent.push (`${musicians[i]} plays ${instruments[i]}`)
}

return sent
}

// while loop
function johnLennonFacts(facts) {
  const excited = []
  var i = 0
  while (i < facts.length) {
    excited.push(`${facts[i]}` + "!!!")
    i++
  }
  return excited
}

// do while loop
function iLoveTheBeatles(n) {
  const empty = []
  do { empty.push("I love the Beatles!")
  n++
  } while (n < 15)
  return empty
}
