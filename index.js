function theBeatlesPlay(musicians, instruments) {
  var who = [];
  for (let i = 0; i < musicians.length; i++){
    who.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return who
};

function johnLennonFacts(facts){
  var scream = []
let i = 0;
while (i < facts.length){
scream.push(`${facts[i]}!!!`)
i++;
}
  return scream
}

function iLoveTheBeatles(n){
  var love = [];
  do{
    love.push(`I love the Beatles!`)
    n++;
  } while (n < 15)

  return love
}
