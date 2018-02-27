function theBeatlesPlay(arr1, arr2) {
  var newArray = [];
  for(var i=0; i<arr1.length; i++) {
    newArray.push(arr1[i] + " plays " + arr2[i]);
  }
  return newArray;
}

function johnLennonFacts(arr) {
  var counter = 0;
  var newArray = [];
  while(counter< arr.length) {
    newArray.push(arr[counter] + "!!!");
    counter ++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    num ++;
    
  } while (num<15);
  return newArray;
}