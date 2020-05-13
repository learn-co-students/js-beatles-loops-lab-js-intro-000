
var array = []
function theBeatlesPlay (musician, instrument){

for (let i=0, l=musician.length;i<l;i++){
  array.push(`${musician[i]} plays ${instrument[i]}`)
}
return array
}
// add solution here

function johnLennonFacts(fact){
var truefact=[]
for(let i=0, l=fact.length;i<l;i++){
  truefact.push(`${fact[i]}!!!`)
}
return truefact
}

function iLoveTheBeatles(num){
  const love=[]
  do{
    love.push(`I love the Beatles!`)
    num++
  }   while(num<15);

return love
}
