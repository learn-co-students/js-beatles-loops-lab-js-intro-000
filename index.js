function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];

  for (var i = 0; i < musicians.length; ++i) {
    emptyArray[i] = musicians[i] + " plays " + instruments[i];
    console.log(emptyArray);

  }
  return emptyArray;
}
function johnLennonFacts(facts){
  var i = 0;
  while ( i < facts.length){
  facts[i] = facts[i] + "!!!";
  i++;
}
return facts;
}
function iLoveTheBeatles(number){
  var emptyArray = [];

  do {
    emptyArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  console.log(emptyArray);

  return emptyArray;
}
