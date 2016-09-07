/*function theBeatlesPlay(instruments, musicians) {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 for (i=0; i < 5, i++)
  newArray = [...instruments, 0];
  instruments.unshift();
  musicians.unshift();
    return ` plays ${0}`
  }
*/

  function theBeatlesPlay(musicians, instruments) {
    var newArray = [];
    for (var i = 0; i < 4; i++) {
     newArray.push(`${musicians[i]} plays ${instruments[i]}`)
   }
     return newArray
}

/*function johnLennonFacts(facts) {
  var newArray = [];
  var i = {};
  while (i != 0) {
     i++ ;
     newArray.push(`${facts[i]}!!!`);
   }
return newArray
}
*/
function johnLennonFacts(facts) {
  var i = 0
  while (facts.length > i) {
    facts[i] += "!!!";
    i++;
  }
return facts;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
return newArray;
}
