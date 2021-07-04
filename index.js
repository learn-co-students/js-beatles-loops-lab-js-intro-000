// add solution here
function theBeatlesPlay(musicians, instruments){
  let result = [];
  for(let i=0; i<musicians.length; i++){
    result.push(musicians[i]+" plays "+instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts){
  let result = [];
  let i=0;
  while (i<facts.length) {
    result.push(facts[i]+"!!!");
    i++
  }
  return result;
}

function iLoveTheBeatles(num){
  let result = [];
  do {
    result.push("I love the Beatles!");
    num++;
  } while (num<15)
  return result;
}