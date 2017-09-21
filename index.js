function theBeatlesPlay(musicians,instruments){
var verb = " plays "
  var BeatlesFacts =[];

  for (var i = 0 ; i < musicians.length ; i++){
  var Temp = musicians[i].concat(verb, instruments[i]);
  BeatlesFacts.push(Temp);
}
  return BeatlesFacts;
}
function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return array;
} 
