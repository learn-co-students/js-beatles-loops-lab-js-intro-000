function theBeatlesPlay(arrayMusicians, arrayInstruments) {

var newArray = [];

  for(var i = 0; i < arrayMusicians.length; i++) {
    newArray.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
  }
  return newArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i] + "!!!")
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var newArray =[];

  do {
    newArray.push("I love the Beatles!")
    number++
  } while(number < 15)

return newArray;

}
