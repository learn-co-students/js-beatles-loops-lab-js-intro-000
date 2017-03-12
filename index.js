function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
  array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}

function johnLennonFacts(array) {
  var x = 0;
  var newArray = [];
  var len = array.length;
  while (x < 4 && x < len) {
  newArray.push(array[x] + "!!!");
    x++;
  }
  return newArray;
}



function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!")
  } while (n++ && n < 15);
    return array;
}
