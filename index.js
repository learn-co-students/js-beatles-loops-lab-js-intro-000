// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  let arrayNew = [];
  for (let i=0; i<arrayMusicians.length; i++) {
    arrayNew.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  }
return arrayNew;
}
function johnLennonFacts(arrayFacts) {
    let i = 0;
    while (i < arrayFacts.length) {
      arrayFacts[i] += "!!!";
      i++;
    }
return arrayFacts;
}

function iLoveTheBeatles(num) {
  let arrayNew = [];
  let i = 0;
    do {
      arrayNew[i] = "I love the Beatles!"
      i++;
    } while (i < 15);
  return arrayNew;
}
