function theBeatlesPlay(artists,instruments){
  var output = [];
  for(var i=0;i<artists.length;i++){
    output.push(artists[i]+' plays '+instruments[i]);
  }
  return output;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i<facts.length){
    facts[i] = facts[i]+'!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var output = [];
  do{
    output.push('I love the Beatles!');
    num++;
  }while(num<15);
  return output;
}
