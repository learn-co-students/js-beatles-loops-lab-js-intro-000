function theBeatlesPlay(musicians, instruments){
  var myStrings = [];
  for (let i = 0; i < musicians.length; i++){
    myStrings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myStrings;
}

function johnLennonFacts(facts){
  var myFacts = [];
  var i = 0;
  while (i < facts.length){
    var sent = facts[i] + "!!!";
    myFacts.push(sent);
    i++;
  }
  return myFacts;
}

function iLoveTheBeatles(number){
  var myVar = [];
  do {
    myVar.push("I love the Beatles!");
    number+=1;
  }while (number < 15);
return myVar;
}
