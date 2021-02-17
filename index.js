// add solution here
function theBeatlesPlay(musicians, instruments) {
    var pairs = [];
    for (let i = 0; i < musicians.length; i++) {
        pairs.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return pairs;
};

function johnLennonFacts(John) {
   var punctuation = [];
   let n = 0;
   while (John.length > n) {
      punctuation.push(`${John[n]}!!!`)
      n += 1
   }
   return punctuation;
};

function iLoveTheBeatles(n) {
   var beatles = [];
   do { 
   	beatles.push(`I love the Beatles!`)
    n += 1;
   } while ( n < 15);
   return beatles;
};