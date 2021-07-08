// add solution here
function theBeatlesPlay(musicians, instruments) {
  let newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}

function johnLennonFacts(facts) {
  let i = 0;
  let newFacts = [];
  while (i < facts.length) {
    newFacts[i] = `${facts[i]}!!!`
    i++
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15)
  return arr;
}
