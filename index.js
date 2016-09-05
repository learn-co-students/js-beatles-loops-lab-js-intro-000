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
defined

Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once
when passed the parameter 17: ReferenceError: iLoveTheBeatles is not defined  */
function iLoveTheBeatles(n) {
  var newArray = []; // Empty Array.
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
return newArray;
}
