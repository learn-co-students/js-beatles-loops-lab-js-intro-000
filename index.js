function theBeatlesPlay(musicians, instruments){
  var arr=new Array()
  for (var i=0; i<musicians.length; i++){
    arr[i]=`${musicians[i]} plays ${instruments[i]}`
  }
  return arr
}

function johnLennonFacts(arr){
  var i = 0
  var newArr= new Array()
  while(i<arr.length){
    newArr[i]=`${arr[i]}!!!`
    i++
  }
  return newArr
}

function iLoveTheBeatles(n){
  var arr = new Array()
  var i = 0

    do {
      arr[i]="I love the Beatles!"
      i++
  } while(i<=n && n<15);

return arr
}
