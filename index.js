function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for(let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let arr = [];
  facts.forEach((x) => {
    arr.push(x + '!!!');
  });
  return arr;
}

function iLoveTheBeatles(n) {
  let arr = [];
  do {
    arr.push('I love the Beatles!');
  } while(++n < 15);
  return arr;
}
