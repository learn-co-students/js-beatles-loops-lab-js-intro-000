var theBeatlesPlay = function(musicians, instruments){
  var playArray = [];
  for (var i = 0; i < musicians.length; i++) {
    playArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return playArray;
}

var johnLennonFacts = function(facts){
  let factsArray = [];
  let counter = 0
  while (facts[counter]) {
      factsArray.push(facts[counter] + "!!!")
      counter += 1;
  }
  return factsArray
}

var iLoveTheBeatles = function(x){
  let loveArray = [];
  let counter = 0;
  do {
    loveArray.push("I love the Beatles!")
    counter += 1;
  } while (x >= counter || x >= 15);

  return loveArray;
}
