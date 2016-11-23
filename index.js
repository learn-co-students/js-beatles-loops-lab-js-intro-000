function theBeatlesPlay (musicians, instruments) {
var emptyArray = [];
for (var i=0; i < musicians.length; i++){
emptyArray [i] = musicians [i]+" plays " + instruments [i]
}
return emptyArray
}


function johnLennonFacts (facts) {
var factsExclamation = [];
var i=0;
while (facts.length > factsExclamation.length){
factsExclamation [i] = facts[i] +"!!!";
i++;
}
return factsExclamation
}

function iLoveTheBeatles (number){
var newArray = [];
do {
newArray.push ("I love the Beatles!")
}
while (newArray.length<(number-1)&&number<15)
return newArray
}
