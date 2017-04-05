
function theBeatlesPlay(marray,iarray){
  var earray = new Array();
  for (var i=marray.length-1;i > -1;i--){
    earray[i] = marray[i]+" plays "+iarray[i]
  }
  return earray
}

function johnLennonFacts(farray){
var i = 0
while (i<farray.length){
  farray[i] = farray[i]+"!!!"
  i++
}
return farray
}

function iLoveTheBeatles(numarg){
  var earray = new Array();
  var i = 0;
  do {
    earray[i] = "I love the Beatles!"
    i++
    numarg++
  } while(numarg < 15)
  return earray
}
