// add solution here
function theBeatlesPlay (musicians, instruments){
  var array = [];
  for(let i = 0; i < musicians.length; i++){
      array.push(musicians[i] + " plays " + instruments[i]);
      }
      return array;
}
function johnLennonFacts(facts){
  let countdown = facts.length - 1;
  while(countdown >= 0){
    facts[countdown] = facts[countdown] + "!!!";
    countdown--;
  }
  return facts;
}
function iLoveTheBeatles(num){
  var emptyArray = [];
  do{
    emptyArray.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return emptyArray;
}
