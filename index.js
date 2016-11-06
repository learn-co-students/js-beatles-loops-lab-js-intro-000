function theBeatlesPlay(musicianArray, instrumentsArray) {
  var newArr = []

  for (var i = 0 ; i < musicianArray.length ; i++ ) {
    newArr.push(`${musicianArray[i]} plays ${instrumentsArray[i]}`)
  }
  return newArr;
}

function johnLennonFacts(factArray) {
  var i = 0
  var newFactArray = []
  while (i < factArray.length) {
    newFactArray.push(`${factArray[i]}!!!`)
    i++;
  }
  return newFactArray;
}

function iLoveTheBeatles(num) {
  var newArr = [];

  do {
    newArr.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return newArr;
}
