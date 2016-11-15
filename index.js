function theBeatlesPlay(musicians, instruments) {
   var phrases = [];
   for (var i = 0; i < musicians.length; i++) {
     phrases.push(musicians[i] + " plays " + instruments[i]);
   }
   return phrases;
 }


  function johnLennonFacts(facts) {
     var differentFacts = [];
     var i = 0;

     while(i < facts.length) {
       differentFacts.push(facts[i] + "!!!");
       i++;
     }
     return differentFacts;
   }

function iLoveTheBeatles(num){
  var differentFacts = [];
  do{
    differentFacts.push("I love the Beatles!");
    num++;}
    while (num < 15);

    return differentFacts
}
