function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i=0; i<musicians.length; i++) {
    var musiciansInstrument = musicians[i] + " plays " + instruments[i];
    arr.push(musiciansInstrument);
  }
  return arr;
}

function johnLennonFacts(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i] + "!!!");
  }
  return arr;
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return arr;
}