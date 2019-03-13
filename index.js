// add solution here
function theBeatlesPlay(musicians, instruments) {
  let result = [];
  for(let i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}
function johnLennonFacts(facts) {
  let i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(number) {
  let result = [];
  do {
    result.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return result;
}
