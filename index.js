function theBeatlesPlay(musicians, instruments){
  var beat = [];
  for (var i = 0; i < musicians.length; i++) {
    beat.push(musicians[i] + " plays " + instruments[i])
  }
  return beat;
}

function johnLennonFacts(array) {
  var john = [];
    for (var i = 0; i < array.length; i++) {
      john.push(array[i] + "!!!");
    }
  return john;
}

function iLoveTheBeatles(n) {
  var beatles = [];
  if (n <= 14){
    do {
      beatles.push("I love the Beatles!");
      n--;
    } while (n >= 0);
  }
  else {
    beatles.push("I love the Beatles!");
  }
  return beatles;
}
