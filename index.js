// add solution here
function theBeatlesPlay (musicians, instruments) {
  let play = [];
  for(let i = 0; i < musicians.length; ++i) {
    play.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return play;
}

function johnLennonFacts (facts) {
  let newFacts = [];
  let i = 0;
  while(i < facts.length) {
    newFacts.push(facts[i++]+'!!!');
  }
  return newFacts;
}

function iLoveTheBeatles (number) {
  let i = 0;
  let loveLoop = [];
  do {
    loveLoop.push("I love the Beatles!");
    i++;
  } while (i <= number && number < 15);
  return loveLoop;
}
