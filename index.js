// add solution here

function theBeatlesPlay(musicians, instruments) {
  let musiciansAndInstruments = [];
  for (let i = 0; i < musicians.length; i++) {
    musiciansAndInstruments[i] = `${musicians[i]} plays ${instruments[i]}`;
  };
  return musiciansAndInstruments;
};

// console.log(theBeatlesPlay(['John Lennon', 'Paul McCartney', 'George Harrison','Ringo Starr'], ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']));

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(factsArray) {
let i = 0;
  while (factsArray[i] != undefined) {
    factsArray[i] = `${factsArray[i]}!!!`;
    i++;
  };
  return factsArray;
};

// console.log(johnLennonFacts(facts));
function iLoveTheBeatles(num) {
  let emptyArray = [];
  do {
    emptyArray.unshift("I love the Beatles!");
    num++;
  } while (num < 15);
  return emptyArray;
};

// console.log(iLoveTheBeatles(0));
