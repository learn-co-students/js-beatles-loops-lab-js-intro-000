function theBeatlesPlay (musicians, instruments){
var resultsArray = [];
  for(var i = 0; i < musicians.length; i++){
    resultsArray.push(musicians[i] + " plays " + instruments[i]);
  };
  return resultsArray;
};


function johnLennonFacts(array){
  var i = 0
  while(i < array.length){
    array[i] = array[i] + "!!!";
    i++
  }
  return array;
}


function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++
  }
  while(number < 15){

    return array;
  }

}
