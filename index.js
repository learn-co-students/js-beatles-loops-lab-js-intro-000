function theBeatlesPlay(arrArtist, arrInstruments){
  var x = [];

  for (let i = 0; i <= arrArtist.length-1; i++){

    if (i == 0){
      var tempStr = arrArtist[i] + " plays " + arrInstruments[i];
      x.push(tempStr);
      continue;
    }
    var rsltStr = arrArtist[i] + " plays " + arrInstruments[i];
    x.push(rsltStr);

  }//end for

  return x;
}//end function

function johnLennonFacts(arrFacts){
 let i = 0;
 let arrRslt = [];
 while (i <= arrFacts.length-1){
  var rslt = arrFacts[i] + "!!!";
  arrRslt.push(rslt);
  i++;
 }//end while
 return arrRslt;
}//end function

function iLoveTheBeatles(num){
var tempArr = [];

do{
  tempArr.push('I love the Beatles!');
  num++;
}while(num < 15);

return tempArr;
}//end function
