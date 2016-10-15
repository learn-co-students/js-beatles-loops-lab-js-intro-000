function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)

  }
  return array
}

function johnLennonFacts(array) {
  var facts = []
  var i = 0
  while ( i < array.length) {
    facts.push(`${array[i]}!!!`)

    i++;
  }
  return facts
}



function iLoveTheBeatles(n) {
  var array = [];

  do {
    array.push(`I love the Beatles!`);
    n++;
  } while (n < 15)

    return array

}


/*

function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}

*/
