// add solution here
function theBeatlesPlay(array, instruments){
  var myArr = [];
  for (var i = 0; i < array.length; i++) {
      myArr.push(`${array[i]} plays ${instruments[i]}`);
  }
  return myArr;
}
function johnLennonFacts(array){
  var i = 0;
  var myArr = [];
  while (i < array.length) {
    myArr.push(array[i] + "!!!");
    i++;
  }
  return myArr;
}
function iLoveTheBeatles(num) {
  var myArr = [];
  do {
    myArr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return myArr;
}
