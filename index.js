// add solution here
function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for (let i = 0; i < musicians.length; i++){
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat;
}

function johnLennonFacts(facts) {
  var factsExclamation =[];
  for (let i = 0; i < facts.length; i++) {
    factsExclamation.push(`${facts[i]}!!!`);
  }
  return factsExclamation;
}

function iLoveTheBeatles(num) {
  var loveTheBeatles = [];
  do {
    loveTheBeatles.push("I love the Beatles!");
    num += 1;
  } while (num < 15);
  return loveTheBeatles;
}
