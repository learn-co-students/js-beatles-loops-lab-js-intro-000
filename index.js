function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var sentance = musicians[i] + " plays " + instruments[i];
    emptyArray.push(sentance);
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var arrayWithExclamations = [];
  var i = 0;
  while (i < facts.length) {
    var addExclamationPoints = facts[i] + "!!!";
    arrayWithExclamations.push(addExclamationPoints);
     i++;
  }
  return arrayWithExclamations
}

function iLoveTheBeatles(n) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    n++;
  }while(n < 15);
  return emptyArray
}
