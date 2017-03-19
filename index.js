function theBeatlesPlay (musicians, instruments){
  var newArray = [];
  for (let i=0; i<= musicians.length-1; i++){
    newArray[i]=`${musicians[i]} plays ${instruments[i]}`
  }
  return newArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  for (let i=0; i<=facts.length-1; i++){
    facts[i] = `${facts[i]}!!!`
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  var i=0;
  do {
    array[i] = "I love the Beatles!"
    number ++;
    i++;
  } while (number<15);
  return array;
}

