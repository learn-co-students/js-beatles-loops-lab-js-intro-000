function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i];
    array[i] = string;
  }
  return array;
}

function johnLennonFacts(facts){
  var i = 0;
  var array = [];
  while(i < facts.length){
    array[i] = facts[i] + '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(n){
  var array = [];
  do {
      array.push("I love the Beatles!");
      n++;
  } while (n < 15)
return array;
  }
