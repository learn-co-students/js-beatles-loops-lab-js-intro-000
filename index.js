// add solution here
function theBeatlesPlay (musicians, instruments) {
  let emptyArray = [];
  for (let i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}
 function johnLennonFacts(facts) {
    let lennyFacts = [];
    let i = 0;
    while (i < facts.length) {
      lennyFacts.push(facts[i] +"!!!");
      i++;
     }
     return lennyFacts;
   }
  function iLoveTheBeatles(num) {
    let blankArray = [];
    do {
      blankArray.push("I love the Beatles!");
      num++;
    } while (num < 15);
    return blankArray;
  }