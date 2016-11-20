function theBeatlesPlay (musicians, instruments){
  var comboArray = [];
  for (var i = 0; i < musicians.length; i++){
    var temp = "";
    temp = musicians[i] +" plays " + instruments[i];
    comboArray.push(temp);
  }
  return comboArray;
}
function johnLennonFacts(factsArray){
  var count = 0;
  var punctuatedArray = [];
  while(count < factsArray.length){
    punctuatedArray[count] = factsArray[count] + "!!!";
    count++;
  }
  return punctuatedArray;
}
function iLoveTheBeatles(n){
  var fanArray = [];
  do {
    fanArray.push("I love the Beatles!");
    n++;

  } while (n < 15);
  return fanArray;
}
