function theBeatlesPlay (array_musician, array_instrument) {
  let theBand = [];
  // Set counter to start at 0, till max length of array.
  for (let i = 0; i < array_musician.length; i++) {
    theBand.push(array_musician[i] + " plays " + array_instrument[i]);
  }
  return theBand;
}

function johnLennonFacts (facts) {
  let excitedLennon = [];
  let i = 0;
  while (i < facts.length) {
    excitedLennon.push(facts[i] + "!!!");
    i++;
  }
  return excitedLennon;
}

function iLoveTheBeatles (number) {
  let beatleLove = [];
  do {
    beatleLove.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return beatleLove;
}
