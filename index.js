// add solution here



function theBeatlesPlay(musicians, instruments){
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  var roles = []
  for(let i = 0, len = musicians.length; i < len; i++) {
    roles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
   return roles;
}

function iLoveTheBeatles(number) {
var beatlesFan = []
var i = 0
  do {

    beatlesFan.push('I love the Beatles!')
    i++
  } while (i <= number && number < 15)
  return beatlesFan
}

function johnLennonFacts(facts){

  var newFacts = [];
  var i = 0
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return newFacts;
}
