/*function theBeatlesPlay(musicians, instruments) {
  var array = [];
    for (var i = 0; i < 4; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
}
*/
//Use a while loop to loop over
//the facts array and add "!!!"
//to the end of every fact.
//The function should return an
//array of strings with exclamation points.



function johnLennonFacts(facts) {
  var array = [];
  var j = 0;
  while(j < 4){
    array.push(facts[j] + "!!!");
    j++;
  }
  return array
}

/*
function iLoveTheBeatles(n) {
  n < 15
  var array = [];
  do {
    console.log(array + "I love the Beatles!");
    n++
} while ();
} */
