// add solution here
function theBeatlesPlay(musicians, instruments){
var array = []
  for (let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(fact){
var lennonArray = []
let i = 0
while (i < fact.length){
  lennonArray.push(fact[i] + '!!!')
  i++
}
return lennonArray
}


function iLoveTheBeatles(n){
 var array = []
do{
  array.push("I love the Beatles!")
  n++
} while (n < 15)
return array
 }
