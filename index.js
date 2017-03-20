function theBeatlesPlay(musicians, instruments) {
  var combinedArray = [];

  for(let i = 0; i < musicians.length; i++) {
    combinedArray.push(musicians[i] + " plays " + instruments[i]);
  }

  return combinedArray;
}

function johnLennonFacts(array) {
  for(let i = 0; i < array.length; i++) {
    array[i] += "!!!";
  }
  return array;
}

function iLoveTheBeatles(n) {
  const arr = [];

  do {
    arr.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return arr;
}
