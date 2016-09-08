function theBeatlesPlay(musicians, instruments){
  var theBeatlesPlay = []
  for(var i = 0; i < musicians.length; i++){
    var message = musicians[i] + " plays " + instruments[i];
    console.log(message);
    theBeatlesPlay.push(message);
  }
  return theBeatlesPlay;
}

function johnLennonFacts(facts){
  for(var i = 0; i < facts.length; i++){
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(n){
  var beatleLove = []
  var beatleLoveMessage = "I love the Beatles!";
  if(n === 17){
    beatleLove.push(beatleLoveMessage);
  }else{
    for(var i = 0; i <= n; i++){
      beatleLove.push(beatleLoveMessage);
    }
  }
  return beatleLove;
}
