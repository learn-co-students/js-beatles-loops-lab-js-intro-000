function theBeatlesPlay(musicians, instruments) {
  var arr = [];
    for(var i=0;i<musicians.length;i++){
      var f = `${musicians[i]} plays ${instruments[i]}`;
      arr.push(f);
    }
    return arr;
}

function johnLennonFacts(facts){
  var i=0;
  while (i<facts.length) {
    facts[i]=`${facts[i]}!!!`;
    ++i;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var arr=[];
  var i=n;
  do {
    arr.push('I love the Beatles!');
    ++i;
  } while (i<15)
  return arr;
}
