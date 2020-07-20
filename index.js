let fusion = []
function theBeatlesPlay(musicians,instruments) {
  for (let i = 0; i < 4; i++) {
    fusion.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return fusion;
}

let facts = ["He was the last Beatle to learn to drive",
            "He was never a vegetarian",
            "He was a choir boy and boy scout",
            "He hated the sound of his own voice",
            "While on tour, he enjoyed playing Monopoly",
            "Harmonica was the first instrument Lennon learned to play"]

function johnLennonFacts (facts) {
  let i = 0;
  let jlfacts = [];
  while (i<facts.length) {
  jlfacts.push(`${facts[i]}!!!`)
  i+=1
  }
  return jlfacts;
}
function iLoveTheBeatles (num) {
  let btle = [];
  do {
    btle.push("I love the Beatles!");
    num ++;
  } while (num <15);
   btle.length === (num -= 15);
   return btle
}
