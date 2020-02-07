// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    for (var j = 0; j < instruments.length; j++) {
      if (i === j) {
        arr.push(`${musicians[i]} plays ${instruments[j]}`);
      }

    }
  }
  return arr;
}
function johnLennonFacts(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += "!!!";
  }
  return arr;
}
function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  }while (n < 15)
  return arr;
}
