function theBeatlesPlay(musicians, instruments){
    var newArray = [];
    for(var m = 0, i = 0; m < musicians.length && i < instruments.length; m++, i++){
      newArray.push(`${musicians[m]} plays ${instruments[i]}`);
    }
    return newArray;
}

function johnLennonFacts(facts){
  var exclamation = [];
  var counter = 0;
  while(counter < facts.length){
    exclamation.push(facts[counter] + "!!!");
    counter++;
  }return exclamation;
}

function iLoveTheBeatles(num){
  var newArray = [];
  do{
    newArray.push("I love the Beatles!");
    num++;
  }while(num < 15);
  return newArray;
}
