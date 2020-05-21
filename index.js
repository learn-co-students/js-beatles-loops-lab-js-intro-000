// add solution here
var array = [];

function theBeatlesPlay(musicians, instruments){

  for (let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var newFacts = []

  let i = 0;

  while(i < facts.length){
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  return newFacts
}

function iLoveTheBeatles(num){
  var array = [];
  var i = num;

  do{
    array.push(`I love the Beatles!`);
    i++;

  } while (i < 15)
  return array
}
