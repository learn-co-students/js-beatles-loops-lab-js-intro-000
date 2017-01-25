function theBeatlesPlay(arrM, arrI) {
  var sArray = [];
  var sString;
  for (let i=0; i < arrM.length; i++) {
    sString = arrM[i] + " plays " + arrI[i]
    sArray.push(sString);
  }
  return sArray
}

function johnLennonFacts(facts) {

  var sArray = [];
  var i=0;
  while (i<facts.length) {
    sArray.push(facts[i] + "!!!");
    i++
  }
  return sArray
}

function iLoveTheBeatles(n) {
  var sArray = [];
  do {
    sArray.push("I love the Beatles!")
    n++
  } while (n<15);
  return sArray
}
