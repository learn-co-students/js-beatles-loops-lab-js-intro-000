function theBeatlesPlay(musician, instrument) {
  var array = []
  var i = 0
  for (i = 0; i < musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
   var i = 0;
   while (i < facts.length) {
     facts[i] = facts[i] + "!!!";
     i++;
   }
   return facts;
 }

 function iLoveTheBeatles(number) {
   var array = [];
   var i = 0;
   do {
     array.push('I love the Beatles!');
     i++;
   } while (i <= number && number < 15);
   return array;
 }
