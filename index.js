function theBeatlesPlay(musicians,instruments){
  var array=[];//empty array, thats why [].
  for(let i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
};

function johnLennonFacts(facts){
  var i=0;
  var newFacts=[];
  while(facts.length>i){
    newFacts.push(`${facts[i]}!!!`);
    i++;
  };
  return newFacts;
};

function iLoveTheBeatles(number){
  var array=[];
  do{
    array.push("I love the Beatles!");
    number++;
  } while(number<15);
  return array;
};
