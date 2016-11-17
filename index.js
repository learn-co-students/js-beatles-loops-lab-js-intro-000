function theBeatlesPlay(musicians, instruments){
  var retArray = new Array();
  for (var i = 0; i < musicians.length; i++){
    retArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return retArray;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var retArray = [];
  if (n >= 15){
    n = 0;
  }
  do {
    n--;
    retArray.push("I love the Beatles!");
  } while( n >= 0 );
  return retArray;
}
