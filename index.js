function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for( var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + ' plays ' + instruments[i];
    array.push(string);
  }
  return array;
}
function johnLennonFacts(facts) {
  var array = [];
  for( var i = 0; i < facts.length; i++) {
    var string = facts[i] + '!!!';
    array.push(string);
  }
  return array;
}
function iLoveTheBeatles(num) {
  var array = [];
  var string = "I love the Beatles!";
  do {
    array.push(string);
    num++;
  }while(num < 15 )
  return array;
}