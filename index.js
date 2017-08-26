function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(fact) {
  var array = [];
  var i = 0;
      while (i < fact.length)
      {
        array.push(`${fact[i]}!!!`);
        i++
        }
      return array
}

function iLoveTheBeatles(n) {
  var array = [];
        do {
            array.push(`I love the Beatles!`);
            n++
            }
        while (n < 15);
      return array
      }
