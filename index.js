// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arrayOfWhoPlaysWhat = [];
  for (let i = 0; i < 5; i++) {

  }
}

function theBeatlesPlay(musicians, instruments) {
  var arrayOfWhoPlaysWhat = [];
  for (let i = 0; i < musicians.length; i++) {
    arrayOfWhoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arrayOfWhoPlaysWhat;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var i = number;
  var emptyArray = [];
  function incrementalVariable() {
    i = i + 1;
    return i;
  }
  do {
    emptyArray.push("I love the Beatles!")
  } while (incrementalVariable() < 15);
  return emptyArray;
}
