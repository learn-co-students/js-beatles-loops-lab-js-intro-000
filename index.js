function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  var i;
  for(i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles;
}

function johnLennonFacts(array) {
var newArray = [];
var i = 0
while (newArray.length != array.length) {
newArray.push(array[i] + "!!!")
i++
}
return newArray
}

function iLoveTheBeatles(number) {
var array = [];
do {
array.push("I love the Beatles!")
number++
} while (number < 15)
return array
}
