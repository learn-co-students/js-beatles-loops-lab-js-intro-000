// add solution here
function theBeatlesPlay (arrMusicians, arrInstruments) {
  var listOfMusician = [];
  for (var i = 0; i < arrMusicians.length; i++){
    listOfMusician.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`);
  }
  return listOfMusician;
}

function johnLennonFacts (arrOfFacts) {
  // var arrOfFacts = [
  //   "He was the last Beatle to learn to drive",
  //   "He was never a vegetarian",
  //   "He was a choir boy and boy scout",
  //   "He hated the sound of his own voice"
  // ];
  var updatedFacts = [];
  var i = 0;
  while (i < arrOfFacts.length) {
    updatedFacts.push(`${arrOfFacts[i]}!!!`);
    i++;
  }
  return updatedFacts;
}

function iLoveTheBeatles (num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return love;
}
