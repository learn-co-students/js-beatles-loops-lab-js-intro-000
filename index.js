function theBeatlesPlay (musicians, instruments) {
  var temparray = [];
  for (var i = 0; i<musicians.length; i++) {
    var tempstring = musicians[i] + ' plays ' + instruments[i];
    temparray[i] = tempstring;
  }
  return temparray;
}

function johnLennonFacts(facts) {
  for(var i = 0; i<facts.length; i++) {
    facts[i]+='!!!';
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  if(number>15) {
    array.push('I love the Beatles!');
  }
  while(number<15) {
    array.push('I love the Beatles!');
    number++;
  }
  return array;
}
