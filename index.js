// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
//
// const facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

// console.log(theBeatlesPlay(musicians, instruments));

function johnLennonFacts(facts) {
  var i = 0;
  var newArray = [];
  while (i < facts.length) {
    newArray.push(facts[i].concat('!!!'));
    i++;
  }
  return newArray;
}

//console.log(johnLennonFacts(facts));

function iLoveTheBeatles(number) {
  var empArray = [];

  do {
    empArray.push('I love the Beatles!');
    number ++;
  } while (number < 15);
  return empArray;
}
