var complete = [];
var complete1 = [];
var complete2 = [];
var r = 0;

function theBeatlesPlay(musicians, instruments){
  for(var i=0; i < musicians.length; i++){
    var holder = musicians[i] + " plays " + instruments[i];
    complete.push(holder);
};
  return complete;
}

function johnLennonFacts(facts){
  while (r < facts.length) {
    var holder1 = facts[r] + "!!!";
    complete1.push(holder1);
    r++;
  }
  return complete1;
}

function iLoveTheBeatles(num){
if(num <= 17){
  do {
    complete2.push("I love the Beatles!");
    num++;
  } while (num < 15);
}
else{
  complete2.push("I love the Beatles!");
}
  return complete2;
}
