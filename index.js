function theBeatlesPlay(musicians, instruments){
  var j = [];
  for (var i = 0; i< musicians.length && i< instruments.length; i++) {
      j.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return j;
}
function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length){
    facts[i] +='!!!';
    i++;
  }
  return facts;
}
function iLoveTheBeatles(number) {
  var array = [];
  do{
    array.push('I love the Beatles!');
    number++
  } while(number < 15);
return array;
}