function theBeatlesPlay(musicians,instruments) {
  var fulllist= []
  for (var i = 0 ; i < musicians.length ; i++ ) {
  fulllist[i] = `${musicians[i]} plays ${instruments[i]}`
}
return fulllist
}

function johnLennonFacts(facts) {
  var i = 0
  while (i<facts.length) {
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var list = []
  do {list.push('I love the Beatles!')
  number++
}
  while (number<15)
  return list
}