const musicians = ['John Lennon', 'George Harrison', 'Paul McCartney', 'Ringo Starr'];
const instruments = ['guitar', 'guitar', 'guitar', 'drums']
const facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'
]

function theBeatlesPlay(musicians, instruments) {
  let arr = [];

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr;
}

function johnLennonFacts(facts) {
  let shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(num) {
  let arr = []

  do {
    arr.push('I love the Beatles!')
    num++
  } while (num < 15)

  return arr
}


theBeatlesPlay(musicians, instruments);

johnLennonFacts(facts)

iLoveTheBeatles(5)
