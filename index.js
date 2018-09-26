function theBeatlesPlay(musicians, instruments){
  var beatles = []
  for (var i = 0; i < musicians.length; i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles;
}

function johnLennonFacts(facts){
  var superFacts = [];
  var i = 0;
  while (i < facts.length){
    superFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return superFacts;
}

function iLoveTheBeatles(num){
  var array = []
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return array;
}
