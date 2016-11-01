function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  var phrase = ""
  for (var i=0; i<musicians.length; i++) {
    phrase = "";
    phrase += musicians[i] + " plays " + instruments[i]
    arr.push(phrase);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var counter = 0;
  var newArr = [];
  while (counter < facts.length) {
    newArr.push(facts[counter] + "!!!");
    counter++;
  }
  return newArr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arr;
}
