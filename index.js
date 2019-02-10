// add solution here
function theBeatlesPlay(mus, inst){
var array = [];

for (let i=0; i < mus.length; i++){
  array.push(mus[i] + " plays " + inst[i])
}

return array;
}

function johnLennonFacts(facts){
  let i = 0;

  while(i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var array = [];

  do {
    array.push("I love the Beatles!");
    num++;}
    while (num < 15)
  return array;
}
