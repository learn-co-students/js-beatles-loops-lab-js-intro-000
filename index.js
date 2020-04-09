function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for ( let i = 0 ; i< musicians.length ; i++  ) {
      array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array;
}

function johnLennonFacts(array) {
  let i = 0;
  while (i < array.length) {
    array[i] = `${array[i]}!!!`
    i++
  }
  return array;
}

function iLoveTheBeatles(n) {
  var array = [];
  let i = 15 - n;
  do {
    array.push("I love the Beatles!");
    i--
  } while (i > 0);
  return array;
}
