// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArray = new Array();

  for(let i = 0; i < musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}


function johnLennonFacts(facts){
let i = 0;
var exclamationFacts = new Array();

  while(facts.length > i){

    exclamationFacts.push(`${facts[i]}!!!`);
    i = i + 1;
  }
  return exclamationFacts;
}


function iLoveTheBeatles(n){
var newArray = new Array();
do{
  //newArray[n] = 'I love the Beatles!';
  newArray.push(`I love the Beatles!`);
  n++;
}while(n<15);

return newArray;
}
