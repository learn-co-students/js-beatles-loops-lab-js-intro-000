function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
 return array;
}


function johnLennonFacts(arrayOfFacts) {
  var i = 0
  while(i < arrayOfFacts.length) {
     arrayOfFacts[i] = arrayOfFacts[i] + "!!!";
      i++
   }
 return arrayOfFacts
}


function iLoveTheBeatles(n) {
  var array = []
   do {
     array.push("I love the Beatles!");
     n++
   } while (n < 15)
 return array;
}
