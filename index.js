// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  let beatles = []
  for (let i = 0; i <= 3; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

const facts = [
  "While on tour, he enjoyed playing Monopoly",
  "Harmonica was the first instrument Lennon learned to play"
]
function johnLennonFacts(facts) {
  let array = []
  let i = 0
  while (array.length < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++
  } return array
}

function iLoveTheBeatles(num) {
  let array = []
  do {
    array.push("I love the Beatles!")
    num++
    } while(num < 15)
    return array
}
