
function theBeatlesPlay(musicians, instruments) {

  var array = [];

  for (var i = 0; i < musicians.length; i++)  {
    var getString = musicians[i] + " plays " + instruments[i];
    array[i] = getString;
  }
  return array;
}


function johnLennonFacts(array) {

  var getLength = array.length;
  var counter = 0;
  var newArray = [];

  while(counter < getLength) {
    newArray[counter] = array[counter] + "!!!";
    counter += 1;
  }
  return newArray;
}


function iLoveTheBeatles(num) {

  var array = [];
  var counter = 0;

  do {
    array[counter++] = "I love the Beatles!";
    num++;
  } while (num < 15);

  return array;
}
