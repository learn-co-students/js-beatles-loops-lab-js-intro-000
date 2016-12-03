function theBeatlesPlay (musicians, instruments) {
  const newArray = [];
  var loopLength = musicians.length;
  for (var i = 0; i < loopLength; i++) {
      newArray.push (musicians[i] + ' plays ' + instruments[i])
  }
  return newArray;

}


function johnLennonFacts (array) {
  var factArray = [];
  var ArrayLength = array.length;
  var currentValue = 0;

  while (ArrayLength > currentValue) {
    factArray.push (array[currentValue] + '!!!')
    currentValue++
  }

  return factArray;
}



function iLoveTheBeatles(n) {
  var vltb = [];

  do {
    vltb.push ("I love the Beatles!")
    n++
  } while (n < 15)
  return vltb;
}
