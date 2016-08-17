function theBeatlesPlay(musicians, instruments) {
const newArray = []

for (let i = 0, l = musicians.length; i < l; i++ ) {
	newArray.push(`${musicians[i]} plays ${instruments[i]}`)
}
	return newArray
}

function johnLennonFacts(facts) {
  const newfacts = []
  var i = 0
while(i < facts.length) {
	newfacts.push(`${facts[i]}!!!`)
	i++
}
	return newfacts
}

function iLoveTheBeatles(n) {
var loveBeatles = []

do{
	loveBeatles.push(`I love the Beatles!`)
n++}
while(n < 15)
return loveBeatles
}
