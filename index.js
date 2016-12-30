function theBeatlesPlay(a, b) {
  var arr = [];
  for (var i=0; i < a.length; i++) {
    arr.push(a[i] + " plays " + b[i]);
  }
  return arr;
}

function johnLennonFacts(a) {
  var arr = [];
  for (var i=0; i < a.length; i++) {
    arr.push(a[i] + "!!!");
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return arr;
}
