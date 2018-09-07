// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var ary = [];
  var i = 0;
  while(i < facts.length) {
    ary.push(`${facts[i]}!!!`);
    i++;
  }
  return ary
}

function iLoveTheBeatles(num) {
  var arry = [];
  do {
    arry.push('I love the Beatles!');
    num++;
  } while(num < 15);
  return arry
}
