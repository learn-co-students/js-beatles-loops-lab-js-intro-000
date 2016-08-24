var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments){
  var match = []
    for (let i=0; i<=3; i++){
        match.push (`${musicians[i]} plays ${instruments[i]}`)
      }
      return match
    }


function johnLennonFacts(facts){
  var i = 0
  while (i<facts.length){
    facts[i]+="!!!"; i++
  }
  return facts
}


function iLoveTheBeatles(n){
  var doWhile = []
  do {
    doWhile.push("I love the Beatles!");
    n++
  }
  while (n<15);
  return doWhile
}
