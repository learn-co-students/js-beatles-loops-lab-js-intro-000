function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
   }
  return array;
}

function johnLennonFacts(array){
  var newArray = []
  let n = 0
  while (n < array.length){
    newArray.push(`${array[n]}!!!`);
    n++
 }
  return newArray
}

function iLoveTheBeatles(number){
  var array = []
    do {
      array.push('I love the Beatles!')
      number++
    }
    while (number < 15)


    return array
}
