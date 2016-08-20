/*
Beatles Loops returns an array of strings containing what instruments each
instrument plays
*/
function theBeatlesPlay(musician, instrument) {
  var musicianArray = []
  for (var i = 0; i < musician.length; i++) {
    musicianArray = [...musicianArray, `${musician[i]} plays ${instrument[i]}`]
  }
  return musicianArray;
}

/*
Beatles Loops johnLennonFacts returns an array of strings with exclamation points
*/
function johnLennonFacts(facts) {
  var factsArray = []
  let i = 0
  while (i < facts.length) {
    factsArray = [...factsArray, `${facts[i]}!!!`]
    ++i
  }
  return factsArray;
}

/*Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!'
 8 times when passed the parameter 7
*/

 function iLoveTheBeatles(number) {
   var beatlesArray = []
   do {
     beatlesArray.push("I love the Beatles!")
     number++
   } while (number < 15);
   return beatlesArray;
 }
