function theBeatlesPlay(musicians, instruments) {
  var a = [];
  for( var i = 0; i < musicians.length; i++ ){
    a.push(musicians[i] + " plays " + instruments[i]);
  }
  return a;
}

function johnLennonFacts(facts) {
  var updatedFacts = [];
  var i = 0;
  while(i< facts.length){
    updatedFacts.push(facts[i] + "!!!")
    i++
  }
  return updatedFacts;
}

function iLoveTheBeatles(n){
  var a = [];
  do {
    a.push("I love the Beatles!")
    n++
  } while(n < 15)
  return a;
}
