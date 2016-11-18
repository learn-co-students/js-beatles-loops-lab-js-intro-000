function theBeatlesPlay(musicians, instruments){
  var stringArray = []
  for (let i = 0; i < musicians.length; i++){
    stringArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return stringArray
}

function johnLennonFacts(facts){
  var newFacts = [];
  let n = 0;
  while (n < facts.length){
    newFacts.push(`${facts[n]}!!!`);
      n++;
  }
  return newFacts
}

function iLoveTheBeatles(n){
var array = [];
  do {
    array.push("I love the Beatles!");
  } while (n++ && n < 15);
  return array
}
