// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  } return arr;
}

function johnLennonFacts(facts) {
  let arr = []
  let i = 0
  while (facts[i]) {
    arr.push(facts[i] + '!!!');
    i++;
  } return arr;
}

function iLoveTheBeatles(i) {
  let arr = [];
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i < 15) {
  } return arr;
}
