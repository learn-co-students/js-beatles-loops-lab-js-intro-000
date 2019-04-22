// add solution here
function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat = [...whoPlaysWhat, `${musicians[i]} plays ${instruments[i]}`];
  }
  return whoPlaysWhat;
}

function johnLennonFacts(factsArray) {
  var stillFacts = 0;
  while (stillFacts < factsArray.length) {
    factsArray[stillFacts] = factsArray[stillFacts] + "!!!";
    stillFacts++;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
  var beatlesLove = [];
  do {
    beatlesLove = [...beatlesLove, "I love the Beatles!"];
    num++;
  } while (num < 15);
  return beatlesLove;
}
