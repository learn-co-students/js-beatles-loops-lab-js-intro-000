function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  let arr = [];

  for (var i = 0; i < arrayOfMusicians.length; i++) {
    arr.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`);
  }

  return arr;
}

function johnLennonFacts(arrayOfFacts) {
  let n = arrayOfFacts.length;
  while (n !== 0) {
    arrayOfFacts[n - 1] += '!!!';
    n--;
  }

  return arrayOfFacts;
}

function iLoveTheBeatles(n) {
  let arr = [];
  do {
    arr.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return arr;
}
