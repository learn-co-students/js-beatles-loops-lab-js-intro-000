var musician = [];
var instrument = [];

function theBeatlesPlay(musician, instrument){
//create empty array stored in variable
var array = [];
for (let i = 0; i < 4; i++){
array.push(`${musician[i]} plays ${instrument[i]}`)
}
return array
}

var lennonFacts= [];
function johnLennonFacts(lennonFacts)
{
  let i = 0;
while (i < lennonFacts.length){

  lennonFacts[i] = lennonFacts[i] + "!!!"
  i++
}
return lennonFacts
}

function iLoveTheBeatles(number){
  var emptyArray = [];
  do{
    emptyArray.push("I love the Beatles!")
    number++;
  } while(number < 15);
  return emptyArray
}
