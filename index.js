function theBeatlesPlay(musicians, instruments) {
  var array = []
// i var length =  musicians.length
  for (let i = 0; i<musicians.length; i++) {
array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array = [];
  let i=0;
  while (i<facts.length) {
    array.push(`${facts[i]}!!!`);
    i++
  }
  return array
}

function iLoveTheBeatles(num) {
var array = [];
let i=0
function incrementVariable() {
  i++;
  return i;
}
do { array.push("I love the Beatles!");
//incrementVariable()
++num
}while (num <15);
return array
}
