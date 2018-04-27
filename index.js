function theBeatlesPlay(arr1, arr2){
  var result = [];
  for(var i = 0; i < arr1.length; i++){
    result.push(arr1[i] + " plays " + arr2[i]);
  }
  return result;
}

function johnLennonFacts(array){
  var result = [];
  var i = 0;
  while(result.length < array.length){
    result.push(array[i] + "!!!")
    i++;
  }
  return result;
}

function iLoveTheBeatles(num){
  var result = [];
  do{
    result.push('I love the Beatles!');
    num++;
  } while(num < 15)
  return result;
}
