function theBeatlesPlay(musicians, instruments){
  var array = [];
  var string = "";
  for (var i = 0; i < musicians.length;i++){
    string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  }
  return array;
}
function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}
function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}