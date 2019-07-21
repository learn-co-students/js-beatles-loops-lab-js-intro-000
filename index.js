// add solution here
let emptyArray = [];
function theBeatlesPlay(musicians, instruments){
  let output;
  for (let i=0; i<musicians.length;i++){
    emptyArray.push(output = musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  let newFacts = [];
  let i=0;
  while(i<facts.length){
    newFacts.push(facts[i]+"!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num){
  let emptyArray= [];
  let words = "I love the Beatles!";
  do {emptyArray.push(words);
    num++;
  } while (num<15)
  return emptyArray;
}
  












