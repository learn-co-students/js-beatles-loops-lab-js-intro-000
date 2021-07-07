function theBeatlesPlay(musicians, instruments){ 
var band = []
for ( var i=0; i<=3; i++) {
  band.push(`${musicians[i]} plays ${instruments[i]}`)
} return band
}
function johnLennonFacts(argument){
  let countdown = [argument.length -1];
  var excitingarray = []
  while (countdown >=0) {
  excitingarray.push(`${argument[countdown]}!!!`); --countdown;
}return excitingarray.reverse()
}
function iLoveTheBeatles (number){
  var lovebug = [];
  do {
  lovebug.push("I love the Beatles!"); number++;
} while (number<15); return lovebug
}
