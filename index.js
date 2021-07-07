let thatBeatle = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
    thatBeatle.push(`${musicians[i]} plays ${instruments[i]}`)
    } return thatBeatle;
  }

function johnLennonFacts(facts) {
  let shoutFacts = [];

  let i = 0;

  while (i < facts.length) {
    shoutFacts.push(`${facts[i]}!!!`)
    i++
  } return shoutFacts;
}

function iLoveTheBeatles(num) {
  let beaLove = [];
  do {
    beaLove.push(`I love the Beatles!`)
    num++
  } while (num < 15);
  return beaLove;
}
