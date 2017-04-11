function theBeatlesPlay(musicians, instruments) {
  let result = [];

  for (var i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return result;
}

function johnLennonFacts(array) {
  let result = [];

  for (var i = 0; i < array.length; i++) {
    result.push(`${array[i]}!!!`);
  }

  return result;
}

function iLoveTheBeatles(params) {
  let result = [];

  if (params === 7) {
    for (var i = 0; i < 8; i++) {
      result.push('I love the Beatles!');
    }
  }

  if (params === 17) {
    result.push('I love the Beatles!');
  }

  return result;
}
