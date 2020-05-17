function theBeatlesPlay(artistArray, instrumentArray) {
  var stringArray = [];
  for (let i = 0; i < artistArray.length; i++) {
    stringArray.push(artistArray[i] + " plays " + instrumentArray[i]);
  }
  return (stringArray);
}

function johnLennonFacts(factArray) {
  var num = 0;
  var newFacts= [];
  while (num < factArray.length) {
    newFacts.push(factArray[num] + "!!!");
    num += 1;
  }
  return (newFacts);
}

function iLoveTheBeatles(num) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return (loveArray);
}
