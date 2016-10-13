const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  const beatlesBand = []


  for(let i = 0, j = 0; i < musicians.length, j < instruments.length; i++, j++){
    beatlesBand.push(musicians[i] + " plays " + instruments[j])
  }

  return beatlesBand
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutedFacts
}

function iLoveTheBeatles(number){
  const array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)

  return array

}
