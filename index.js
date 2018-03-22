function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push (musicians[i] + ' plays ' +instruments[i]);
   }
   return array;
}
function johnLennonFacts(facts) {
  var newArray = [];
  var j = 0;
  while (j<facts.length) {
    newArray.push(facts[j] + "!!!");
    j++;
  }
  return newArray;
}
function iLoveTheBeatles(number) {
  var lastArray = [];
  do {
    lastArray.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return lastArray;
}
