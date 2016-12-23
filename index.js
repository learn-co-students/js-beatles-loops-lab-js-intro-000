function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  for(var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts (facts) {
  var newArray = [];
  for(var i = 0; i < facts.length; i++) {
    newArray.push(facts[i] + '!!!');
  }
  return newArray;
}

function iLoveTheBeatles (x) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    ++x;
  }
  while(x < 15);
  return newArray;
}
