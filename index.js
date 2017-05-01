function theBeatlesPlay(arrayM, arrayI){
  var arr1 = []
  for (var i = 0; i < arrayM.length; i++) {
    console.log(`${arrayM[i]} plays ${arrayI[i]}`)
    arr1.push( `${arrayM[i]} plays ${arrayI[i]}`);
  }
  return arr1
}

function johnLennonFacts(array){
  var i = 0
  var arr= array
  while (i < arr.length){
    arr[i]= arr[i]+ `!!!`;
    ++i
  }
  return arr
}

function iLoveTheBeatles(n){
  var arr = []
  var i = n
  do {
    arr.push("I love the Beatles!")
    ++i
  } while (i<15);
  return arr
}