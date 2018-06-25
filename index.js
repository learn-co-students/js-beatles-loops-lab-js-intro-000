//array of musicians
musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

//array of instruments
instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

//function theBeatlesPlay that concatenates the musicians and instruments arrays
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + " plays " + instruments[i]);
  }
return array
}

//array of facts about John Lennon
facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]
  
//function johnLennonFacts that uses a while loop to add !!! to the end of each element in the facts array
function johnLennonFacts(facts) {
  let i=0
  while (i<facts.length){
    facts[i]=facts[i]+"!!!"
    i++
  }
return facts
}

//function iLoveTheBeatles that uses a do-while loop to add "I love the Beatles!" to an array 15 times
function iLoveTheBeatles(n) {
  var array =[]
  do {
    array.push("I love the Beatles!")
    n++}
  while (n<15);
  return array
  }
