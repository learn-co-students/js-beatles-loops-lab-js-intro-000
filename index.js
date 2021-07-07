var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass guitar", "Lead Guitar", "Drums"];
var answer = []

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < 4; i++){
    answer.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return(answer)
}


function johnLennonFacts(array) {
  var i = 0 ;
  var funfacts = []
  while (i < array.length) {
  funfacts.push(array[i] + "!!!");
  i++; }
  return(funfacts)
}


///code above is correct


function iLoveTheBeatles(num){
  var love = []
  do {love.push("I love the Beatles!");
  num++;
} while (num < 15)
return(love)
}
