function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts){
  var array = [facts]
  var counter = 0

  while (counter < facts.length){
    array[counter] = (`${facts[counter]}!!!`)
    counter++
  }

  return array
}

 function iLoveTheBeatles(number){
   var array = [];
   do {
     array.push("I love the Beatles!");
     number++;
   } while (number < 15);
   return array;
 }
