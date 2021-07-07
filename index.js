function theBeatlesPlay(musicians, instruments) {
let beatlesStr;
let beatlesInstrument=[];
for( let i = 0; i<musicians.length; i++){
  beatlesStr = musicians[i] + ' plays ' + instruments[i];
  beatlesInstrument[i] = beatlesStr;
}
return beatlesInstrument;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {

let newFacts = [];
let i = 0;

while(i<facts.length)  {
  newFacts.push(facts[i] + '!!!');
  i = i + 1;
}
return newFacts;
}


function iLoveTheBeatles(num) {
  let arr = [];
do {
  num++;
  arr.push("I love the Beatles!")
} while (num<15);
return arr;
}
