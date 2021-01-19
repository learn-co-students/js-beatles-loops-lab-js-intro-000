// add solution here
let bees = []

function theBeatlesPlay(musicians, instruments){
  for(let i = 0; i < musicians.length; i++){
  bees.push(`${musicians[i]} plays ${instruments[i]}`)
}
return bees
}


function johnLennonFacts(array){
  let n = 0
  let newFacts = []
  while(array.length > n){
    newFacts.push(`${array[n]}!!!`)
    n++
  }
  return newFacts
}


let t = 14
function incrementVaraible(){
  return t--
}

function iLoveTheBeatles(num){
  var empty =[]
  do{
    empty.push(`I love the Beatles!`);
} while(incrementVaraible() > num);
return empty
}
