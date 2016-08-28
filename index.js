function theBeatlesPlay(musicians, instruments ){
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0;
  let fact = []
  while (i < facts.length) {
    fact[i] = facts[i] + "!!!";
    i++
  }
  return fact
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++
  }
  while (number < 15)
  return array
}
