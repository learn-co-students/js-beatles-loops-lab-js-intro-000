// add solution here
function theBeatlesPlay(musician, instruments){
  let music = [];

  for(let i = 0; i < musician.length; i++){
     music.push(`${musician[i]} plays ${instruments[i]}`)
  }
  return music;
}

function johnLennonFacts(facts){
let lennonFacts = [];
let count = 0;

while(facts.length > count){
  lennonFacts.push(`${facts[count]}!!!`);
  count += 1;
}
return lennonFacts;

}

function iLoveTheBeatles(number){
  let beatles = [];

  do{beatles.push("I love the Beatles!")}
    while(number++ < 14);


  return beatles;
}
