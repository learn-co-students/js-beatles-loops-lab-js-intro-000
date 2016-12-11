function theBeatlesPlay(arrM, arrI) {
  var x = [];
  for (var i = 0; i < arrM.length; i++) {
  x.push(`${arrM[i]} plays ${arrI[i]}`);
  }
  return x;
}

function johnLennonFacts(arrF) {
  var x = [];
  var i = 0;
  while (i < arrF.length) {
    x.push(`${arrF[i]}!!!`);
    i++;
  }
  return x;
}

function iLoveTheBeatles(num) {
  var x = [];
  do {
    x.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return x;
}
