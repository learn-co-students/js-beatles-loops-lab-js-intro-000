// add solution here
// var musicians = ["x", "y", "z"]
// var instruments = ["x2", "y2", "z2"]
// var emptyArray = []

// function theBeatlesPlay(musicians, instruments) {
  
  
  
// }


function theBeatlesPlay(musicians,instruments) {
var x = []
for (var i = 0; i < musicians.length; i++) {
    x.push(musicians[i] + ' plays ' + instruments[i])
}
return x;
}

function johnLennonFacts(array) {
var i = 0
while (i < array.length) {
  array[i] += '!!!';
  i++;
}
return array;
}

 function iLoveTheBeatles(number) {
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;
}