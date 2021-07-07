function theBeatlesPlay (musicians, instruments) {

var MyArray = [];

for (let i = 0; i < musicians.length; i++) {
  MyArray.push(musicians[i] + " plays " + instruments[i])
}
return MyArray;
}// add solution here

function johnLennonFacts (array) {
let newArray = []
var n = 0;
  while (n < array.length) {
    newArray.push(array[n] +"!!!");
    n++
}
return newArray;
}

function iLoveTheBeatles (n) {
var emptyArray = [];
let i = n;
do {
  emptyArray.push("I love the Beatles!")
  i++;
} while (i < 15);
return emptyArray;
}
