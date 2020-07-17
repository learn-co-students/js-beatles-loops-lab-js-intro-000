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
      do {
      arrayNew[num] = "I love the Beatles!"
      num++;
    } while (num < 15);
  return arrayNew;
}
