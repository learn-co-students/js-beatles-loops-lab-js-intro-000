function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var newArray = [];

  for (var i = 0; i < arrayMusicians.length; i++) {
    newArray[i] = arrayMusicians[i] + " plays " + arrayInstruments[i];
  }

  return newArray;
}


function johnLennonFacts(factsArr) {
  let i = 0;

  while (i < factsArr.length) {

    factsArr[i] += "!!!";

    i++;
  }

  return factsArr;
}

function iLoveTheBeatles(num) {
  let newArray = [];

  do {
    newArray.push("I love the Beatles!");

    num++;
  } while (num < 15);

  return newArray;
}
