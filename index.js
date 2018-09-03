var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments){
  var stringArray = [];
  for(let i = 0; i < 4; i++){
    musicians[i];
    stringArray.push(`${musicians[i]} plays ${instruments[i]}`);
      }
  return stringArray;
}
/*var facts =['He was the last Beatle to learn to drive', 'He was never a vegetarian', 'He was a choir boy and boy scout', 'He hated the sound of his own voice'];*/
function johnLennonFacts(facts){
  var newArray = [];
   let i = 0;
   while(i < facts.length){
     newArray.push(`${facts[i]}!!!`);
     i++;
   }
   return newArray;
}
function iLoveTheBeatles(n){
  var newArray = [];
  do{newArray.push("I love the Beatles!"); n++}
  while(n < 15);
  return newArray;
}


