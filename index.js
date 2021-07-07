function theBeatlesPlay(arr1, arr2) {
  var b = [];
  for (var i = 0; i < 4; i++) {
    var x = `${arr1[i]} plays ${arr2[i]}`;
    b.push(x);
  }
  return b;
}

function johnLennonFacts(arr) {
  var newArr = [];
  var i = 0;
  while (newArr.length < arr.length) {
    var p = `${arr[i]}!!!`;
    newArr.push(p);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  var newNum = 15 - num;
  do {
    arr.push('I love the Beatles!');
  } while (arr.length < newNum)
  return arr;
}
