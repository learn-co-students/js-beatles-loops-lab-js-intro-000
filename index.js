const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];  

function theBeatlesPlay(musicians, instruments){
  var theBeatles = [];
  for(var m = 0; m < musicians.length; m++){
    for(var i = 0; i < instruments.length; i++){
      if(m === i){
       theBeatles.push(`${musicians[m]} plays ${instruments[i]}`);
      }
    }
  }
  return theBeatles;
}
theBeatlesPlay(musicians, instruments);

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var factsString = [];
  var counter = 0;
  while(counter < facts.length){
    factsString.push(`${facts[counter]}!!!`);
    counter++;
  }
  return factsString;
}
johnLennonFacts(facts);

function iLoveTheBeatles(number){
  var beatlesLove = []; 
  do {
    beatlesLove.push('I love the Beatles!');
    number++;
  } while (number < 15);
  if(number > 15){
    return beatlesLove;
  }
  return beatlesLove;
}
iLoveTheBeatles(7);