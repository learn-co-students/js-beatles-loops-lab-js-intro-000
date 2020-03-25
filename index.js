// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(let i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr;
}

function johnLennonFacts(facts){
  var newArr = [];
  var i = 0;

  while(i < facts.length){
    var newFact = facts[i]+ "!!!" 
    newArr.push(newFact);
    i += 1;
  }

  return newArr;
}

function iLoveTheBeatles(num){
  var fanArr = [];

  let i = num;
 
  do {
    fanArr.push("I love the Beatles!");
    i += 1;
  } while (i < 15);

  return fanArr;
}