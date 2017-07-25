function theBeatlesPlay(musicians, instruments){
  var beatles = [];
  for(var i = 0; i < musicians.length; i++){
    beatles [i] = musicians[i] + " plays " + instruments[i];
  }
  return beatles;
}
function johnLennonFacts(facts){
  var i = 0;
  while(facts.length > i){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(num){
  const newArray = [];
  do{
    newArray.push('I love the Beatles!');
    num++;
  }while(num < 15);

  return newArray;
}
