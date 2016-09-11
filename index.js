function theBeatlesPlay(a, b) {
  var c = []
  for (var i = 0; i < a.length; i++) {
    c.push(a[i] + " plays " + b[i])
  }
  return c
}

function johnLennonFacts(a) {
  var i=0;
  while (i<a.length) {
    a[i] = a[i] + "!!!";
    i++;
  }
  return a;
}

function iLoveTheBeatles(a) {
  var arr = [];
    do {
      arr.push("I love the Beatles!");
      a++;
    } while (a<15);
    return arr;
}
