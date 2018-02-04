function theBeatlesPlay(musicians, instruments) {
  var beatles = [];

  for(let i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return beatles;
}

function johnLennonFacts(facts) {
  for(let i = 0; i < facts.length; i++) {
    facts[i] += "!!!";
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var love = [];

  do {
    love.push("I love the Beatles!");
    num++;
    
  } while(num < 15);

  return love;
}
