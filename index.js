// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (let i = 0; i < 4; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
    //console.log(newArray);
  }
  //console.log(newArray);
  return newArray;
}

function johnLennonFacts(array) {
  var newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + "!!!");
  }
  console.log(newArray);
  return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  if (num < 15) {
    for (let i = 0; i <= num; i++) {
      newArray.push("I love the Beatles!");
    }
  }
  else {
    newArray.push("I love the Beatles!");
  }
  return newArray;
}
