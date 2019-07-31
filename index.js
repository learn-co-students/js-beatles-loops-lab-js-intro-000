// add solution here
  function theBeatlesPlay(musicians, instruments) {
    const array = []

    for (let i = 0, l = musicians.length; i < l; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
      }
    return array
}

  function johnLennonFacts(facts) {
    const exclamation = []
    let i = 0

    while (i < facts.length) {
      exclamation.push(`${facts[i]}!!!`);
      i++;
  }
    return exclamation
}

function iLoveTheBeatles(num) {
  const fan = []

  do {
    fan.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return fan;
}
