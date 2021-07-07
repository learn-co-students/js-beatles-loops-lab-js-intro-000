// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arrOfFacts= [];
  var i = 0;
  while (facts[i]) {
    arrOfFacts.push(facts[i] + '!!!');
    i++;
  }
  return arrOfFacts;
}

function iLoveTheBeatles(num) {
  var arr2 = [];
  do {
    arr2.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr2;
}
