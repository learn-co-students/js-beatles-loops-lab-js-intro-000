function theBeatlesPlay(musicians,instruments){
  let theBeatlesPlay = [];
  for(let i=0;i<musicians.length;i++) {
    theBeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesPlay;
}

function johnLennonFacts(array) {
  let facts = [];
  for(let i = 0;i<array.length;i++) {
    facts.push(`${array[i]}!!!`)
  }
  return facts;
}

function iLoveTheBeatles(num) {
  let love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num && num<15);
  return love;
}
