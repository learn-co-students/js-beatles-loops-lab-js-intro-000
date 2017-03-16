function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arr = [];

  for (let i = 0; i < arrMusicians.length; i++) {
    arr[i] = arrMusicians[i] + ' plays ' + arrInstruments[i];
  }
  return arr;
}

function johnLennonFacts(arrFacts) {
  var arrExclamation = [];
  let i = 0;
  while (i < arrFacts.length) {
    arrExclamation.push(arrFacts[i] + '!!!');
    i++
  }
  return arrExclamation;
}

function iLoveTheBeatles(n) {
  var arrLoveBeatles = [];
  do {
    arrLoveBeatles.push("I love the Beatles!");
    n++
  } while (n < 15);
  return arrLoveBeatles;
}
