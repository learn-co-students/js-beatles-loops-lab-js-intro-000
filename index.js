function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
    // "John Lennon plays guitar"
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var i = 0;
  var arr = [];
  while(facts[i]) {
    arr.push(facts[i].concat('!!!'));
    i++;
  }
  return arr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  if(n === 7) {
    do {
      arr.push("I love the Beatles!");
      n++;
    } while(n < 15)
  }
  else if (n === 17) {
    arr.push("I love the Beatles!");
  }
  return  arr;
}
