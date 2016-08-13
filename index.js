function theBeatlesPlay(musicians, instruments){
  var stringArray = [];
  for (var i=0; i<(musicians.length-1);i++){
    stringArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return stringArray;
};
