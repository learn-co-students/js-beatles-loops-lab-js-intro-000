function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i = 0, l = musicians.length; i < l;i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts){
  var array = [];
  let i = 0
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push("I love the Beatles!")
  } while (number === 7 && number === 17);
  return array;
}
