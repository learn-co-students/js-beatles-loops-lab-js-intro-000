function theBeatlesPlay(music, inst) {
  const array = [];
  for (let i=0; i < music.length; i++) {
      array[i] = `${music[i]} plays ${inst[i]}`
  }
  return array;
};

function johnLennonFacts(facts) {
  var i = 0
  while (i<facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
};

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number<15)
  return array;
}
