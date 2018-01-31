function theBeatlesPlay(musicians, instruments) {
 var emptyArray=[];
 for (var m=0; m<musicians.length; m++) {
     emptyArray.push(musicians[m]+ " plays " +instruments[m])
  }
return emptyArray
}

function johnLennonFacts(array)  {
var i=0
while (i<array.length) {
  array[i] += "!!!"
  i++
}
return array
}

function iLoveTheBeatles(number) {
var emptyArray=[];
  do{
    emptyArray.push("I love the Beatles!")
    number++
  } while (number<15);
  return emptyArray
}
