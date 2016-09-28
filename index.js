function theBeatlesPlay(musicians,instruments) {
var array = []
for (array.lenght = 0 ; array.lenght < 4  ; array.lenght++)
{  var xx = "plays"
  if ( array.lenght === 0 ){
 array.push(`${musicians[0]} ${xx} ${instruments[0]}`)
}
else if (array.lenght === 1 ){
array.push(`${musicians[1]} ${xx} ${instruments[1]}`)
}
else if (array.lenght === 2 ){
array.push(`${musicians[2]} ${xx} ${instruments[2]}`)
}
else if (array.lenght === 3 ){
array.push(`${musicians[3]} ${xx} ${instruments[3]}`)
}
}
return array
}

function johnLennonFacts(facts){
  var i = 0
  var v = []
  while ( i < facts.length ) {
  v.push(`${facts[i]}!!!`)
     i++
  }
  return v
}


function iLoveTheBeatles(number){
  let g = 7
  var v = []

  var f = "I love the Beatles!"
  do {
      v.push(f)
      g++  }
  while (v[g] < 15){
  }
return v
}
