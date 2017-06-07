function theBeatlesPlay(musicans, instruments){
  var results = [];
  for (var i = 0; i < musicans.length; i++) {
    results.push(musicans[i] + " plays " + instruments[i])
  }
  return results;
}

function johnLennonFacts(facts) {
  var results = [];
  for (var i = 0; i < facts.length; i++){
    results.push(facts[i] + "!!!");
  }
  return results;
}

function iLoveTheBeatles(num){
  var results = [];
  do {results.push("I love the Beatles!");
  num++;
  }
  while (num < 15);
  return results;
}
