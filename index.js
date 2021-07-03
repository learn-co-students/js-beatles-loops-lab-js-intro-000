const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay (musicians, instruments){
  let newArr = [];
  for (let i=0; i<musicians.length; i++){
    newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  } return newArr;
}

function johnLennonFacts(facts){
  let i = 0;
  let newFacts = [];
  while (i<facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num){
    let i = 0;
    let newBeatles = [];
    if (num<15){
      do {
        newBeatles.push("I love the Beatles!");
        i++;
      } while (i < num);
    }
    return newBeatles;
}

function iLoveTheBeatles(num){
  let newBeatles = [];
  do {
    newBeatles.push("I love the Beatles!");
    num++;
  } while (num<15);
  return newBeatles;
}
