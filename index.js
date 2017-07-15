function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (let i = 0; i < musicians.length; i++){
    sentences[i]= `${musicians[i]} plays ${instruments[i]}`;
  }
  return sentences;
}

function johnLennonFacts(facts){
  for (let i=0; i<facts.length; i++){
    facts[i] = `${facts[i]}!!!`;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var beatlesLove = [];
  do{
    beatlesLove.push("I love the Beatles!")
    num = num+1;
  }while(num<15);
  return beatlesLove;
}
