function theBeatlesPlay (musicians, instruments) {
  var emptyArray = []
  var i = 0
  for (let i=0; i< 4; i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (facts) {
  var i = 0;
  var newArray=[];
  while(facts.length>i){
    newArray.push(`${facts[i]}`+'!!!');
    i++;
  }
  return newArray;
  }

function iLoveTheBeatles(n) {
  var emptyArray = [];
  do{
    n++;
    emptyArray.push('I love the Beatles!');
  }while (n <15);
  return emptyArray
}
