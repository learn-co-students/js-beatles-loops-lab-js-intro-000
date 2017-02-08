function theBeatlesPlay(musicians, instruments){
  var array = [];
  var string = "";
  for (var i = 0; i < musicians.length;i++){
    string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  }
  return array;
}
function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}
function iLoveTheBeatles(number){
  var array = [];
  var i = 0;
  if (number < 15){
    do {
      array[i] = "I love the Beatles!";
      i++;
    } while (i<number + 1)    
  }else {
    array[i] = "I love the Beatles!";
  }
  return array
  }
    