// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(array1,array2){
 var array = []
 for(var i=0; i<4;i++){
   array[i] = `${array1[i]} plays ${array2[i]}`
 }
 return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(array1){
  var array = []
  let i = 0
  while(i<array1.length){
    array[i] = `${array1[i]}!!!`;
    i++
  }
  return array
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push("I love the Beatles!");
    n++
  }
  while(n<15)
  return array
}
