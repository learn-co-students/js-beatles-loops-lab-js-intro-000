function theBeatlesPlay(musicians, instruments){
  let emptyArray = [];
  for(let i = 0; i <= 3; i++){
    emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return (emptyArray);
}

function johnLennonFacts(facts){
var i = 0;
while(i < facts.length){
  facts[i] += "!!!";
  i++;
}
return (facts);
}

function iLoveTheBeatles(number){
  var arrayEmpty = [];
  do{
    arrayEmpty.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return(arrayEmpty);
}
