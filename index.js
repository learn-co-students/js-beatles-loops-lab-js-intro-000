function theBeatlesPlay(musicians, instruments) {
  var pairs = []
  for (var i = 0, l = musicians.length; i < l; i++) {
    pairs.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return pairs
}

function johnLennonFacts(array) {
  const shoutedFacts = []
  for (let i = 0; i < array.length; i++) {
    shoutedFacts.push(`${array[i]}!!!`)
  }
  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const love = []

  do {
    love.push('I love the Beatles!')
    n++
  } while (n < 15)

  return love
}
