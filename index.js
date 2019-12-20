// add solution here
function theBeatlesPlay(musicians, instruments){
var list = [];
var mlen = musicians.length;
  for (let i = 0; i < mlen; i++){
    list.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return list;
}

function johnLennonFacts(facts){
var i = 0;
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts
}

function iLoveTheBeatles(i){
var say = [];
  do {
    i++;
    say.push('I love the Beatles!');
  }
  while (i < 15);
  return say
}
