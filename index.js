function theBeatlesPlay(array1, array2) {

var emptyArray = [];

for (let i = 0; i < array1.length; i++) {
  emptyArray.push(array1[i] + " plays " + array2[i])
}
return emptyArray;
}

function johnLennonFacts(array) {
let factArray = []
var n = 0;
  while(n < array.length) {
    factArray.push(array[n] + "!!!");
    n++
}
return factArray;
}

function iLoveTheBeatles(n) {
var loveArray = [];
let i = n;
do {
  loveArray.push("I love the Beatles!")
  i++;
} while (i < 15);
return loveArray;
}
