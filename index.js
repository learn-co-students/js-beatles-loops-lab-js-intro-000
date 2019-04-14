// add solution here

function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  
  for (let counter = 0; counter < musicians.length; counter++) {
    arr.push(`${musicians[counter]} plays ${instruments[counter]}`)
  }
  
  return arr;
  
}


const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];
    
function johnLennonFacts(facts) {
  let i = 0;
  let arr = [];
  
  while (i < facts.length) {
    arr[i] = `facts[i]!!!`
  }
  
  return arr;
}


function iLoveTheBeatles(number) {
  let arr = [];
  
  do {
    arr.push("I love the Beatles!");
    number++;
  } 
  while (number < 15);
  
  return arr;
}