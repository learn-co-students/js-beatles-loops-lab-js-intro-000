function theBeatlesPlay(musicians, instruments) {
  let players = [];

  for (let i = 0; i < musicians.length; i++) {
    players.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return players;
}

function johnLennonFacts(facts) {
  let crazyFacts = [];
  for (let i = 0; i < facts.length; i++) {
    crazyFacts.push(facts[i] + '!!!');
  }
  return crazyFacts;
}

function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
  } while (++num < 15);
  return love;
}
