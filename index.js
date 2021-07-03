// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for(var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + " plays " + instruments[i];
    result.push(str);
  }
  return result;
}

function johnLennonFacts(facts) {
  var johnFacts = [];
  let i = 0;

  while(i < facts.length) {

      var result = facts[i] + "!!!";
      i++;
      johnFacts.push(result);
  }
   return johnFacts;
}


function iLoveTheBeatles(num) {
  let resArray = [];

  do {
     let str = "I love the Beatles!";
     resArray.push(str);
     num++;
  }while (num < 15);

  return resArray;
}
