// add solution here

function theBeatlesPlay(musicians, instruments){
  var store = [];
  for (let i = 0; i < musicians.length; i++) {
    store.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return store;
}

function johnLennonFacts(facts) {
  let store = [], i = 0;

  while (i < facts.length) {
    store.push( facts[i] + "!!!")
    i += 1;
  }
  return store;
}

function iLoveTheBeatles(n) {
  let store = [], i = n;
  do {
    store.push("I love the Beatles!");
    i++;
  } while ( (15 - i) > 0);
  return store;
}

console.log(iLoveTheBeatles(17))
