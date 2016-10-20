function theBeatlesPlay(musicians,instruments){
  var band = [];
  for (var i = 0; i < musicians.length; i++) {
    band = [...band, musicians[i] + " plays " + instruments[i]]
  }
  return band
}

function johnLennonFacts(array){
  var fact = [];
  var i = 0;
  while (i < array.length){
    fact = [...fact, array[i] + "!!!"]
    i++;
    }
  return fact
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array = [...array, "I love the Beatles!"];
    n++;
  } while (n < 15);
  return array
}
