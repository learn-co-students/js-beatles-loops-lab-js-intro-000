// add solution here
let artists = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

let instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

let newArray = [];

function theBeatlesPlay () {
  for (let i = 0; i < artists.length; i++) {
    newArray.push(`${artists[i]} plays ${instruments[i]}`);
  }
  return newArray;
}


let facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];



function johnLennonFacts(facts) {
  let text = [];
  let i = 0;
  while (i < facts.length){
    text.push(`${facts[i]}!!!`);
    i++;
  }
  return text;
}



function iLoveTheBeatles(num) {
  let otherArray = [];
  //otherArray.push("I love the Beatles!");

  let i = num;
  do {
    otherArray.push("I love the Beatles!");
      ++i;
    }
    while (i < 15);
    return otherArray;
  }
