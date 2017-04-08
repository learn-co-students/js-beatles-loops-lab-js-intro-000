function theBeatlesPlay(musicians, instruments) {
  var AllPlayers = []
  for (var i=0; i<musicians.length; i++ )
  {
    AllPlayers.push(musicians[i] + " plays " + instruments[i]);
  }
  return AllPlayers
}

function johnLennonFacts(facts) {
  var NewFacts = [];
  var i = 0;
  while (i < facts.length) {
    NewFacts.push(facts[i] + "!!!");
    i++;
  }
  return NewFacts;
}

function iLoveTheBeatles(number) {
  var NewArray = [];
  do {
    NewArray.push("I love the Beatles!");
    number++;
  }
  while ( number < 15);
  return NewArray;
}
