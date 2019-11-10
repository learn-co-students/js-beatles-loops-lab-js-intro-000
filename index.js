// add solution here
function theBeatlesPlay(arrofmus,arrofinst){
  var emarray = [];
  for(var i = 0;i < arrofmus.length;i++){
    emarray.push(arrofmus[i] +' plays '+arrofinst[i]);
  }
  return emarray;
}
function johnLennonFacts(facts){
var array1 = [];
  let i = 0;
  while(i < facts.length){
    array1.push(facts[i] + '!!!');
    i++;
  }
  return array1;
}
function iLoveTheBeatles(num){
 var array = [];

  do {
    array.push('I love the Beatles!');
    num++;
  } while(num < 15);
  return array;
}
