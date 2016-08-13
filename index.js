function theBeatlesPlay(musicians, instruments){
  var stringArray = [];
  for (var i=0; i<(musicians.length);i++){
    stringArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return stringArray;
};

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  };
  return facts;
};

function iLoveTheBeatles(number){
  var myArr = [];
  do{
    myArr.push("I love the Beatles!");
    number+=1;
  }while(number<15);

  return myArr;
};
