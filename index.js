// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = [];

  for (var i = 0; i < musicians.length; i++) {
    let musician = musicians[i];
    let instrument = instruments[i];
    arr.push(`${musician} plays ${instrument}`);
  };
  return arr;
};

function johnLennonFacts(facts) {
  let arr = [];
  let i = 0;
  while (i < facts.length) {
    let fact = facts[i];
    arr.push(`${fact}!!!`);
    i++;
  };
  return arr;
};

function iLoveTheBeatles(num) {
  let arr = [];

  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
};
