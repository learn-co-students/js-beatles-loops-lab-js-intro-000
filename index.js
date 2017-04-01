//hii
function theBeatlesPlay(musicians,instruments){
  var newStr = []
  for(var i=0; i<musicians.length ; i++){
    newStr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newStr
}

function johnLennonFacts(arr){
  var i = 0, newArr = []
  while(i<arr.length){
    newArr.push(`${arr[i]}!!!`)
    i++
  }
  return newArr
}

function iLoveTheBeatles(num){
  var newArr = []
  do{
    newArr.push("I love the Beatles!")
    num++
  }while(num<15)
  return newArr
}