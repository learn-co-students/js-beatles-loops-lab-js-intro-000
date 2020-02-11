
function theBeatlesPlay(musicians, instruments) {
 var array = []; 
  for (var i = 0; i < musicians.length; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`);
  
       }
return array
}


function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length ) {
    array.push(facts[i] + "!!!")
    i++ ;
      console.log(facts)
  }
  return array
}



function iLoveTheBeatles(num){
  var array = [];
do {
    console.log("I love the Beatles!");
    array.push("I love the Beatles!")
    console.log(array)
    num++;
  } while (num < 15);
    
return array
}




