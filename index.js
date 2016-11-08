function theBeatlesPlay(musicians, instruments){
  var a = [];
for (var i = 0; i < musicians.length; i++){
      a.push(`${musicians[i]} plays ${instruments[i]}`)
}
return a
}

function johnLennonFacts(array){
var i = 0;
var b = [];
while(i < array.length){
  b.push(`${array[i++]}!!!`)
}
return b
}

function iLoveTheBeatles(n){
var c = [];

  do{
  c.push("I love the Beatles!")

}while(++n < 15 )
return c
}
