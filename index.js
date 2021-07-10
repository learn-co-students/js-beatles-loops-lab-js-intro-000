function theBeatlesPlay(musicians, instruments) {
  console.log(musicians, instruments);
  var beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return beatlesArray;
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] += "!!!"
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return love;
}
