function theBeatlesPlay(musicians, instruments) {
  var list = [];
  /*for (let n = 0, l = musicians.length; i < l; i++)*/
  var n = 0;
  for (musicians[n]; n < 4; n++) {
    list.push(`${musicians[n]} plays ${instruments[n]}`);
  }
  return list;
}

function johnLennonFacts(fact) {
  var jlist = [];
  var l = fact.length;
  var n = 0;
  /*(i < facts.length*/
  while (n < l) {
    jlist.push(`${fact[n]}!!!`); n++;
  }
  return jlist;
}

function iLoveTheBeatles(number) {
  var blist = [];
  do {
    blist.push('I love the Beatles!'); number++}
    while(number < 15);
  return blist;
}
