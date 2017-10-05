function theBeatlesPlay(musicians, instruments){
var table = [];
for (var i = 0; i < musicians.length ; i++){
  table.push(musicians[i] + " plays " + instruments[i]);
}
return table;
}

function johnLennonFacts(facts){
      var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
        i++;


  }
  return facts;
}

function iLoveTheBeatles(numbers){
  var body = [];
  do{
    body.push("I love the Beatles!");
    numbers++;
  } while(numbers < 15);
  return body;
}
