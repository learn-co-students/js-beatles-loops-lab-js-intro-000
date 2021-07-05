function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {

    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}
function johnLennonFacts(facts) {
  const shoutedfacts = []

  let i = 0
  while (i < facts.length) {
   shoutedfacts.push(`${facts[i]}!!!`)
   i++

  }

  return shoutedfacts
}

function iLoveTheBeatles(number)  {
   const loveBeats = []
  do {
      loveBeats.push("I love the Beatles!")
      number++

 } while (number < 15)

    return loveBeats
 }
