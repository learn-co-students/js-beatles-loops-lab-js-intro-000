function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length ; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}



function johnLennonFacts (array) {
  var i = 0
  var newArray = [];
  while (i < array.length) {
    newArray.push(array[i] + "!!!")
    console.log(i++)
  }
  return newArray
}


function iLoveTheBeatles (n) {
  var newArray = [];
  do {
     newArray.push("I love the Beatles!")
     console.log(++n)
  } while (n < 15);
  return newArray
}
