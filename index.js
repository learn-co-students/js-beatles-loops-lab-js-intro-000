function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);

  }
  return array
}


function johnLennonFacts(facts) {
var array = []

  let x = 0;
  while (x < facts.length) {
    array.push(`${facts[x]}!!!`)
    x++;
  }
  return array
}


  function iLoveTheBeatles(n) {
    var array = []

    do {
      array.push('I love the Beatles!')
      n++;
    } while(n < 15);

    return array
  }
