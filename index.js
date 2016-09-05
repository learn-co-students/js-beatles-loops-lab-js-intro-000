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
  var i = 0
  while (array.length > i) {
    array[i] += "!!!";
    i++;
  }
return array;
}


/* Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8
times when passed the parameter 7 : ReferenceError: iLoveTheBeatles is not
defined */


function iLoveTheBeatles(int) {
  var newArray = []; // Empty Array.
  do {
    newArray.push("I love the Beatles!");
    return newArray += 1;
  } while (newArray <= 8);
return newArray;
}
