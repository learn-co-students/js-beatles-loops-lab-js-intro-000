function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var newArray = [];
    for (let i = 0; i < facts.length; i++) {
    newArray.push(facts[i] + '!!!');
    }
  return newArray;
}
/*The test supplies the arrays for the functions and may supply more than one array.In this case it supplies a four element array for the beatles
and a two element array for foo bar. Each array is passed into the facts parameter and run through the for loop then returned for the test to
analyze.
*/

function iLoveTheBeatles(number) {
  var array = [];
  do {
     array.push('I love the Beatles!');
   }
  while (number < 15 && array.length < (number + 1));
  return array;
}
//need to limit to the length of the array
