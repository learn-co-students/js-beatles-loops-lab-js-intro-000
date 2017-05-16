function johnLennonFacts(array){
   for (var idx = 0; idx <= array.length-1; idx ++){
     array[idx] = array[idx] + "!!!";
   }
   return array
}

function iLoveTheBeatles(num){
  var luv_storage = [];
  do { 
    luv_storage.push("I love the Beatles!");
    num++
} while (num < 15); 
return luv_storage
}

function theBeatlesPlay(musicians, instruments){
  var pairs = []; 
  for (var idx = 0 ; idx <= musicians.length-1; idx++){
    pairs.push(`${musicians[idx]} plays ${instruments[idx]}`);
  }
  return pairs;
}