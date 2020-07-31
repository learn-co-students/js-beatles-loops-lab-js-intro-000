// add solution here
function theBeatlesPlay(musician, instrument) {
  let array = []
  for ( let i = 0; i < musician.length ; i++) {
    const str = musician[i] + " plays " + instrument[i];
    array.push(str)
  }
  return array
}

function johnLennonFacts(facts) {
  let array = []
  for ( let i = 0; i < facts.length; i++) {
    const str = facts[i] + "!!!"
    array.push(str)
  }
  return array
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
