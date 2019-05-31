function theBeatlesPlay(musicians, instruments) {
    var i = 0;
    var newArray = [];
    for (i = 0; i < musicians.length; i++) {
      var elementArray = musicians[i] + " plays " + instruments[i];
      newArray.push(elementArray);
    } return newArray
  }


function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++;
  } return array;
}

function iLoveTheBeatles(number) {
    var emptyArray = [];
    do {
    emptyArray.push("I love the Beatles!");
    number++;
  } while (number < 15) ;
  return emptyArray;
}
