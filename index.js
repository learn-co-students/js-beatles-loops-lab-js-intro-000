
function theBeatlesPlay(artist, instrument){
  var result = [];
  var artistString = "";
  var instrumentString = "";
  var newString = "";
  for(var i = 0; i < artist.length; i++){
    artistString = artist[i];
    instrumentString = instrument[i];
    newString = artistString + " plays " + instrumentString;
    result.push(newString);
    newString = "";
  }
  return result;
}

function johnLennonFacts(info){
  var result = [];
  var currentString = "";
  for(var i = 0; i < info.length; i++){
    currentString = info[i];
    currentString = currentString + "!!!";
    result.push(currentString);
    currentString = "";
  }
  return result;
}

function iLoveTheBeatles(n){
 var newArray = [];
   do {
     newArray.push("I love the Beatles!");
     n++;
   } while (n < 15);

  return newArray;
}
