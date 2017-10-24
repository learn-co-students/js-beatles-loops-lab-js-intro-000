function theBeatlesPlay(musicians, instruments){
  var newList = [];
  for(var i=0; i<musicians.length; i++){
    newList[i] = musicians[i] + " plays " +instruments[i];
  }
  return newList;
}
function johnLennonFacts(facts){
  var newArray = [];
  for(var i=0; i<facts.length; i++){
    newArray[i] = facts[i] + "!!!";
  }
  return newArray;
}
function iLoveTheBeatles(num){
  var newArray = [];
  var i = 0;
  do {
    newArray[i] = "I love the Beatles!";
    i++;
  } while (i<=num && num< 15);
  return newArray;
}
