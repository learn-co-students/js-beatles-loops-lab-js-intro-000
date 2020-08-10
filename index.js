// add solution here
//for loop
function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}
//while loop
function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}
//do while loop
function iLoveTheBeatles (num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array;
}
