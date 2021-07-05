// add solution here

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array;
}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts[i].concat("!!!");
  }
  return facts;
}
function iLoveTheBeatles(num){
  var BeatlesArray = [];
  var i = 0;
  do {

    BeatlesArray[i] = "I love the Beatles!"
    num++;
    i++;
  } while (num < 15);
  return BeatlesArray;
}
