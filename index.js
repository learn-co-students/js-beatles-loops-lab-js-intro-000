function theBeatlesPlay (musicArray, instrArray) {
  var combinedArray = Array();
  for (let i = 0; i < musicArray.length ;i++){
    combinedArray[i] = `${musicArray[i]} plays ${instrArray[i]}`
  }
  return combinedArray
}

function johnLennonFacts (array) {
  var n = array.length
  while (n >= 0) {
    array[n-1] = `${array[n-1]}!!!`
    n -= 1
  }
  return array
}

function iLoveTheBeatles (number) {
var tempArray = Array();
var tempI = 0
do {
  tempArray[tempI] = "I love the Beatles!"
  number += 1
  tempI += 1
} while (number < 15);
return tempArray

}
