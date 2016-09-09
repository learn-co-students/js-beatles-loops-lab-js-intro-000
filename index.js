/*function theBeatlesPlay(musicians, instruments) {
  var whoPlays = [];
  for(i = 0; i < musicians.length; i++) {
    whoPlays[i] = musicians[i] + " plays " + instruments[i];
  }
  return whoPlays;
}*/

function theBeatlesPlay(musicians, instruments) {
  var whoPlays = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlays.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return whoPlays;
}

/*function johnLennonFacts(facts){
  var count = 0;
  while(count < facts.length) {
    facts[count] = `${facts[count]}!!!`;
    count++;
  }
  return facts;
}*/

function johnLennonFacts(facts){
  var count = 0;
  while(count < facts.length) {
    facts[count] += "!!!";
    count++;
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
