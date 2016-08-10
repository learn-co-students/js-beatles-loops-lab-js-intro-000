
function iLoveTheBeatles(num){
  var empty = [];
  do{
    empty.push("I love the Beatles!");
    num++;
  }while(num < 15);

  return empty;
}
function theBeatlesPlay(musicians, instruments){

  var empty = [];

  for(var i = 0; i < musicians.length; i++){
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts(facts){
  var factsWithExclamation = [];
  var i = 0;
  while(i < facts.length){
    var str = facts[i] + "!!!";
    factsWithExclamation.push(str);
    ++i;
  }
  return factsWithExclamation;
}
