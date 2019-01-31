// add solution here
function theBeatlesPlay(musicians, instruments) {
  var eachBeatlePlays = [];
  for (let i = 0; i < 4; i++) {
    eachBeatlePlays[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return eachBeatlePlays;
}

function johnLennonFacts(facts) {
  var arrayLength = facts.length;
  var index = 0;
  while (index < arrayLength) {
    facts[index] = facts[index] + '!!!';
    index++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var theArray = [];
  do {
    theArray.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return theArray
}
