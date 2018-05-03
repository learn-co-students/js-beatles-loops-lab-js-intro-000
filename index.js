function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i = 0; i < 4; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  let countdown = facts.length - 1;
  var factsArray = [];
  while (countdown > -1) {
    factsArray.unshift(facts[countdown] + "!!!");
    --countdown;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    num++
  } while (num < 15);
  return myArray;
}