function theBeatlesPlay(arrayM, arrayI){
  var variable = [];
    for (var i=0; i<arrayM.length; i++){
      variable.push(arrayM[i] + " plays " + arrayI[i]);
    }
  return variable
}

function johnLennonFacts(facts){
  var n = 0;
  var array = []
    while(n < facts.length){
    array.push(facts[n]+ "!!!");
    n++;
  }
  return array;
}

function iLoveTheBeatles(n){
  var array = [];
  do{
    array.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return array;
}
