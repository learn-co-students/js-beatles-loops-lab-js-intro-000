function theBeatlesPlay(musicians, instruments) {
  var finalStr = [];
  for (var i = 0; i < musicians.length; i++) {
    finalStr.push(musicians[i] + " plays " + instruments[i]);
  }
  return finalStr;
}

function johnLennonFacts(factsArr) {
  var finalArr = [];
  for (var i = 0; i < factsArr.length; i++) {
    finalArr.push(factsArr[i] + "!!!");
  }
  return finalArr;
}

function iLoveTheBeatles(num) {
  var loveArr = [];
  do {
      loveArr.push("I love the Beatles!");
      num++;
      }
  while (num < 15);
  return loveArr;

}
