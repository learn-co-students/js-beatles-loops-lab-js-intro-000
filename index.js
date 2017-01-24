function theBeatlesPlay(musicArr, instArr) {
  var statement = [];
  for (var i = 0; i < musicArr.length; i++) {
    statement.push(`${musicArr[i]} plays ${instArr[i]}`);
  }
  return statement;
}

function johnLennonFacts(factsArr) {
  var newArr = [];
  var i = 0;
  while (factsArr.length > i) {
    newArr.push(factsArr[i]+"!!!");
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}