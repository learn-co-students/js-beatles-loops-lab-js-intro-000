function theBeatlesPlay(musicians, instruments) {

  return musicians.map(musician =>
    `${musician} plays ${instruments[musicians.indexOf(musician)]}`
  )

}

function johnLennonFacts(facts) {

  return facts.map(fact => fact + '!!!')

}

function iLoveTheBeatles(num) {
  var arr = []

  do {
    arr.push('I love the Beatles!')
    // num++
  } while (++num < 15)

  return arr
}