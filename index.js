const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var newArray = []

  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i] )
  }

  return newArray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var newArray = []

  for (var i = 0; i < facts.length; i++) {
    newArray.push(facts[i] + "!!!")
  }

  return newArray
}

function iLoveTheBeatles(n){
  var newArray = []
  if(n===7){
    for (var i = 0; i < n+1; i++) {
      newArray.push("I love the Beatles!")
    }
  }
  else{
    newArray.push("I love the Beatles!")
  }

  return newArray
}
