function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var newArr = [];
  var i = 0;

  while (i < facts.length) {
    newArr.push(facts[i] + "!!!");
    i++;
  }
  return newArr;
}
function iLoveTheBeatles(num) {
  var newArr = [];
  var i = 0;
  if (num < 15) {
    
  do {
    newArr.push("I love the Beatles!");
    i++;
  } while (i <= num);
} else {
  newArr.push("I love the Beatles!");
}
return newArr;
}


