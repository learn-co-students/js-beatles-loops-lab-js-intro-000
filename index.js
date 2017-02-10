function theBeatlesPlay (musiArray, instArray){
var whoPlaysWhat = []

for(var i=0,j=0,wpwIndex =0;i<musiArray.length && j<instArray.length;i++,j++,wpwIndex++) {
whoPlaysWhat[wpwIndex] = musiArray[i] + " plays " + instArray[j]
}
return whoPlaysWhat
}

function johnLennonFacts(factArr){
  if (factArr.length>0){
    var countDownLength = factArr.length-1
    while(countDownLength>=0){
      factArr[countDownLength] = factArr[countDownLength]+"!!!"
      countDownLength--
    }
  }
  return factArr
}

function iLoveTheBeatles(howMany){
  var doYouLoveBeatles = [],index=0
  do {
    doYouLoveBeatles[index] = "I love the Beatles!"
    howMany++
    index++
  }while(howMany<15);
  return doYouLoveBeatles
}