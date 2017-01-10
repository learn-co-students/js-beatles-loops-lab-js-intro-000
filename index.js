var complete = [];
var complete1 = [];
var complete2 = [];

function theBeatlesPlay(musicians, instruments){
  for(var i=0; i < musicians.length; i++){
    var holder = musicians[i] + " plays " + instruments[i];
    complete.push(holder);
};
  return complete;
}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++) {
    var holder1 =  facts[i] + "!!!";
    complete1.push(holder1);
  }
  return complete1;
}

function iLoveTheBeatles(num){
  for(var e=0; e < num; e++){
    var holder2 = "I love the Beatles";
    complete2.push(holder2);
  }
  return complete2;
}