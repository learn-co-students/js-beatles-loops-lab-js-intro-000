function theBeatlesPlay (musicians, instruments) {
  var theArray = new Array();
  //var theVariable = new Object();
  //Object.assign(theVariable, theArray);
  for (let i = 0; i < musicians.length; i++) {
    theArray.push(musicians[i] + " plays " + instruments[i])
  }
  return theArray;
}

function johnLennonFacts (facts) {
  var facts2 = new Array();
  let i = 0;
  while (facts.length > i) {
    facts2.push(facts[i] + "!!!");
    i++;
  }
  return facts2;
}

function iLoveTheBeatles(number) {
  var theArray = new Array();
  do {
    theArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return theArray;
}
