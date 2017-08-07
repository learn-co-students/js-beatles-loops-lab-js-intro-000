function theBeatlesPlay(musicians, instruments) {
  var stringsArray = [];
  for (var i = 0; i < 4; i++) {
    stringsArray.push(musicians[i] + " plays " + instruments[i])
  }
  return stringsArray
}

function johnLennonFacts(facts){
  var i = 0,
      excitedFacts = [];
  while (i < facts.length){
    excitedFacts.push(facts[i] + "!!!");
    i++;
  }
  return excitedFacts
}
/* the prompt in the readme does not tell the student if the order of the strings in the array matters.
 Unless they look at the test to begin with, valid solutions could increment with i++ or i-- */

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  } while(number < 15)
  return array
}
