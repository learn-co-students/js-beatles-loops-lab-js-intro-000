function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts){
  const factsArr= [];
  let i = 0;
  while(i < facts.length) {
    factsArr.push(`${facts[i]}!!!`)
    i++;
  }
  return factsArr;
}

function iLoveTheBeatles(n){
  const arr = [];

  do {
    arr.push('I love the Beatles!');
    n++;
  }while (n < 15);
  return arr;
}
