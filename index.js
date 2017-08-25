function theBeatlesPlay(musicians, instruments){
var emptyarray = [];
for (var i = 0; i < musicians.length; i++) {
  var sentance = musicians[i] + ` plays ` + instruments [i];
 emptyarray.push(sentance);
}
return emptyarray
}


function johnLennonFacts(facts){
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array
}

function iLoveTheBeatles(i){
  var array = [];
    do {
    array.push("I love the Beatles!");
    i++;
  }
  while (i < 15);
  return array
  }
