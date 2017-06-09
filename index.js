function theBeatlesPlay(musicians, instruments){
  var arrToBuild = [];

  for(var i = 0; i < musicians.length; i++){
    arrToBuild.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arrToBuild;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i !== facts.length){
    facts[i] = facts[i] + '!!!'
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  } while(num < 15);

  return arr;
}
