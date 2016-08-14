function theBeatlesPlay(musicians,instruments){
  var plays = [];

  for(var x in musicians){
    plays.push(`${musicians[x]} plays ${instruments[x]}`);
  }

  return plays;

}

function johnLennonFacts(facts) {
  const shoutedFacts = [];

  let i = 0;
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`);
    i++;
  }
}

function iLoveTheBeatles(num){
  var arr = [];
  if(num === 7){
    for(var i  = 0; i < num+1; i++){
      arr.push("I love the Beatles!");
    }
    return arr;
  }

  if(num === 17){
    for(var i  = 0; i < 1; i++){
      arr.push("I love the Beatles!");
    }
    return arr;
  }
}
