// add solution here
function theBeatlesPlay(musicians, instruments) {
  var counter = [];
  var len = musicians.length;
  var i = 0;
  for (i = 0; i < len; i++) {
    var musicman = musicians[i]
    var musicmech = instruments[i]
    counter[i] = `${musicman} plays ${musicmech}`
  };
  return counter
};
function johnLennonFacts(array) {
  var exclaim = [];
  var length = array.length;
  var i = 0;
  for (i = 0; i < length; i++) {
    var musicman = array[i]
    exclaim[i] = `${musicman}!!!`
  };
  return exclaim
};
function iLoveTheBeatles(number) {
  var emptyArray = [];
  var i = 0;
  var num = number;
  do{
    emptyArray[i] = "I love the Beatles!"
    num++
    i++
  }while(num < 15);
return emptyArray
};
