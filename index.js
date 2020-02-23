var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var answer = []

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0, i < 3, i++){
    answer.push(`${musicians[i]} plays ${instruments[i]}`);
    console.log(answer);
  }
}
