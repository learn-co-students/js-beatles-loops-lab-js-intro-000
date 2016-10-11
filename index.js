function theBeatlesPlay( arrayMusicians, arrayInstruments ) {

  var newArray = [];

  for (let i = 0; i < arrayMusicians.length; i++ ) {
    newArray.push(arrayMusicians[i] + " plays " + arrayInstruments[i]);
  }
  return newArray;
}


function johnLennonFacts( arrayFacts ) {
  var newArray = [];
  let counter = 0;

  while (counter < arrayFacts.length) {
    newArray.push(arrayFacts[counter] + "!!!");
    counter++;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15 );
  return newArray;
}
