function theBeatlesPlay(musicians, instruments){
  var array =[];
  var i =0;
  for (i = 0 ; i < 4; i++){
    array.push(musicians[i]+ " plays " + instruments[i] );
  }
  return array;
}
function johnLennonFacts(array){
  var n = array.length;
  while (n > 0){
    array[n-1] = array[n-1] + "!!!" ;
    --n
  }

  return array;
}
function iLoveTheBeatles(n){
  var array = [];
  do{
    array.push("I love the Beatles!");
    ++n;
  }while (n < 15)
  return array;
}
