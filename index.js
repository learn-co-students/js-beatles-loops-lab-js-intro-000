function theBeatlesPlay(artist, instrument) {
  var array = []
  for (let i = 0; i < artist.length; i++) {
    var stringAdd = artist[i] + " plays " + instrument[i]
    array.push(stringAdd)
  }
  return array
}

function johnLennonFacts(array) {
  var newArray = [];
  let i = 0;

  while (i < array.length) {
    var newLine = array[i] + "!!!"
    newArray.push(newLine);
    i++
  }
  return newArray

}

function iLoveTheBeatles(n) {
  var array = [];

  do {
    array.push('I love the Beatles!');
    n++

  } while (n < 15)
  return array;
}
