function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var arr = [];

  for (let i = 0; i < musiciansArr.length; i++) {
    arr.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`);
  }

  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];

  let i = 0;

  while (i < facts.length) {
    arr.push(`${facts[i]}!!!`);
    i++;
  }

  return arr;
}

function iLoveTheBeatles(n) {
  var arr = [];

  do {
    arr.push('I love the Beatles!');
    n++;
  } while (n < 15)

  return arr;
}
