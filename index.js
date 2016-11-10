function theBeatlesPlay(musicians,instruments){
  var arr = [];
  for (var i=0;i<musicians.length;i++){
    arr.push (musicians[i] + ' plays ' + instruments[i])
  }
  return arr;
}

function johnLennonFacts(facts){
  var excitingFacts = [];
  var i = 0;
  while(excitingFacts.length<facts.length){
    excitingFacts.push(facts[i]+'!!!');
    i++;
  } return excitingFacts;
}

function iLoveTheBeatles(n){
  var arr = [];
  do {arr.push("I love the Beatles!");
  n++;
} while (n<15);
return arr;
}
