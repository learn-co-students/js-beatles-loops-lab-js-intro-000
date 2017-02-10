function theBeatlesPlay(musicians, instruments) {
  var phrase = []
  for (var i = 0; i < musicians.length; i++) {
    phrase.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrase;
}

  function johnLennonFacts(facts){
  var i = 0;
  while ( i < facts.length){
  facts[i] = facts[i] + "!!!";
  i++;
}
return facts;
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!");
    num++;
  }
  while (num < 15)
  return array;
}
