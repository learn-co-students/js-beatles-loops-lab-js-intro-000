// add solution here
function theBeatlesPlay(musicians, instruments) {
  var resultArray = [];
  
  for(var i = 0; i < musicians.length; i++) {
    resultArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return resultArray;
}

/*

function johnLennonFacts(facts) {    
  var resultArray = [];
  var i = 0;
  while(facts.length > 0) {             
    resultArray.push(`${facts[i]}!!!`);
    facts.length--;     // this changes the original element data not just counting the length of the element. I misunderstood...
    i++;
  }
   return resultArray;
}

*/
function johnLennonFacts(facts) {    
  var resultArray = [];
  var i = 0;
  while(facts.length > i) {             
    resultArray.push(`${facts[i]}!!!`);
    i++;
  }
   return resultArray;
}

function iLoveTheBeatles(num) {
  var resultArray = [];
  
  do {
    resultArray.push(`I love the Beatles!`);
    num++;
  } while(num < 15);

  return resultArray;
}

