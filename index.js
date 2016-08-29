function theBeatlesPlay(musicians, instruments){
  var result = [];
  var string = "";
  for (var i = 0; i < musicians.length; i++){
    string = musicians[i] + " plays " + instruments[i]
    result.push(string);
      }
      return result;
}

function johnLennonFacts(facts){
  var result = [];
  var i = 0;
  var string = "";
    while (i < facts.length){
      string = facts[i] + "!!!";
      result.push(string);
      i++;
    }
  return result;
}

function iLoveTheBeatles(n){
  var result =[],
      string = "I love the Beatles!";
  do {
    result.push(string);
    n++;
  } while (n < 15);
    return result;
}
