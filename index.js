// add solution here
function theBeatlesPlay (musicians, instruments) {

  let arr = [];

  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return arr;

}

function johnLennonFacts (facts) {

  let arr = [];

  for (let char of facts) {arr.push(char + '!!!')};

  return arr;

}

function iLoveTheBeatles (num) {

  let arr = [];

  do {
    arr.push("I love the Beatles!");
    num += 1;
  } while (num < 15)

  return arr;
}
