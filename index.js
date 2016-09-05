/* Beatles Loops returns an array of strings containing what instruments each
instrument plays: ReferenceError: theBeatlesPlay is not defined  */
function theBeatlesPlay(musicians, instruments) {
  var newArray = []; // Empty Array.
  for (let i = 0; i < musicians.length; i++) {
       newArray.push(musicians[i] + " plays " + instruments[i]);
  }
return newArray;
}

/* Beatles Loops johnLennonFacts returns an array of strings with exclamation
points: ReferenceError: johnLennonFacts is not defined */
function johnLennonFacts(array) {
  var newArray = []// Empty Array.
  while (array > 0) {
    newArray.push(array + " !!!");
  }
return newArray;
}
