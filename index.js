function theBeatlesPlay (musicians,instruments){
  var empty = []
  for (var i=0;i<musicians.length;i++){
    empty.push(musicians[i] + ' plays ' + instruments[i])
  }
  return empty
}

function johnLennonFacts (arr){
  var counter = 0
  while (counter < arr.length){
    arr[counter] += '!!!'
    counter ++
  }
  return arr
}

function iLoveTheBeatles (num){
  var arr = []
  do {
    arr.push('I love the Beatles!')
    num ++
  } while (num < 15)
  return arr
}