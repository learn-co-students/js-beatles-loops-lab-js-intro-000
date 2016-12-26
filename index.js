function theBeatlesPlay(musicians, instruments) {
  const newArray = []

for(let i=0, l = musicians.length; i < l; i++) {

console.log(`${i} and ${l}`)
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)

}
console.log(newArray);
return newArray

}


function johnLennonFacts (facts){

const shoutedFacts = []
var l = facts.length
var i=0

 while(i < l){

   shoutedFacts.push(`${facts[i]}!!!`)
   i++

 }
  return shoutedFacts
}

function iLoveTheBeatles(n){
  const newArray = []

  do{
    newArray.push('I love the Beatles!')
    n++
  } while (n < 15)

  console.log(newArray);
  return newArray
}
