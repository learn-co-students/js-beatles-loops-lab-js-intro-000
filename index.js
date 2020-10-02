// add solution here
function theBeatlesPlay (musician, instrument) {
  var play = [];
  for(let i = 0; i < musician.length; i++) {
    play.push(musician[i] + " plays " + instrument[i]);
  }
  return play;
}

function johnLennonFacts(facts) {
  var i = 0, arr = [];
  while(i < facts.length) {
    arr.push(facts[i] + "!!!")
    i+= 1;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num+= 1;
  } while(num < 15);
  return arr;
}