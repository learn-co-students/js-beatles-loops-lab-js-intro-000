function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for (let i = 0; i < 4; i++) {
      whoPlaysWhat[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return whoPlaysWhat;
}

function johnLennonFacts(facts) {
  var i = 0;
  var counter = facts.length;
  while (i < counter) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var crazyFan = [];
  do {
    crazyFan.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return crazyFan;
}
