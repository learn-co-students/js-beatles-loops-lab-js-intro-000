function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  var len = musicians.length;
  for(let i = 0; i < len; i++) {
    arr[i] = musicians[i] + " plays " + instruments[i];
  }
  return arr;
}
function johnLennonFacts(facts) {
  var arr = [];
  var len = facts.length;
  for(let i = 0; i < len; i++) {
    arr[i] = facts[i] + "!!!";
  }
  return arr;
}
function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while(number < 15)
  return arr;
}
