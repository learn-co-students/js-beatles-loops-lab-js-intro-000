
function theBeatlesPlay(musicians, instruments) {

var a = [];

for(var i = 0; i < musicians.length; i++) {


  a.push(musicians[i] + " plays " + instruments[i]);



  }
   return a;
}

theBeatlesPlay("Joh Lennon", "Guitar");



function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;

  while (i < facts.length) {
  arr.push(facts[i] + "!!!");
  i++;
  }
return arr;

}



function iLoveTheBeatles(number) {

 var arr = [];

 do{
   arr.push("I love the Beatles!");
  number ++;


 } while (number < 15)

 return arr;

}
