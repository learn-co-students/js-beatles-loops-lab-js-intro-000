// add solution here
let musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
let instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
return array
}


const facts = ["While on tour, he enjoyed playing Monopoly",
 "Harmonica was the first instrument Lennon learned to play"];

function johnLennonFacts(facts) {
const array = [];
for (let i = 0; i < facts.length; i++){
  array.push(facts[i] + '!!!');
}
return array
}


function iLoveTheBeatles(number) {
  let array = [];

 do {
   array.push(`I love the Beatles!`);
   number++
 } while (number < 15);
return array;
 }
