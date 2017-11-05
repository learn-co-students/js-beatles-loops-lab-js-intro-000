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
  var beat = [];
  if (n < 15){
    do {
      beat.push("I love the Beatles!");
      n--
    } while (n === 0);
  }
  else {
    beat.push("I love the Beatles!");
  }
  return beat;
}
