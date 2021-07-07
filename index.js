// add solution here
var holder = []
let i = 0
function theBeatlesPlay(names,instruments){
for (i=0; i < names.length; i++){
  holder.push(`${names[i]} plays ${instruments[i]}`)
}
return holder
i = 0
}


function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

//let counter = 0

function iLoveTheBeatles(counter){
  const array = []
  do {
  array.push("I love the Beatles!")
  counter += 1
  }
  while (counter < 15)
  return array
}
