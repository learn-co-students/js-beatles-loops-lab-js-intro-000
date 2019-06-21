// add solution here
function theBeatlesPlay (arrayMusicians, arrayInstruments) {
  var whoPlays = []
  for (let i = 0; i < 4; i++) {
    whoPlays.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
  }
  return whoPlays
}

function johnLennonFacts (arrayFacts) {
  var superFacts = [];
  let i = 0;
    while (arrayFacts.length > i) {
      superFacts.push(`${arrayFacts[i]}!!!`);
      i++;
}
  return superFacts
}


function iLoveTheBeatles (number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    number++;
} while (number < 15);
  return newArray;
}
