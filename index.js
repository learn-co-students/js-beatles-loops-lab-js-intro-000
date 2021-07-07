// add solution here
function theBeatlesPlay(array_m,array_i){
  var array_3 = []
  for(var i = 0; i<array_m.length; i++){
    array_3.push(array_m[i] + " plays " + array_i[i])
  }
  return array_3
}
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arr){
  var x = 0
  var y = arr.length
  var array = []
  while(x<y){
    array.push(arr[x] + "!!!")
    x++

  }
  return array
}


function iLoveTheBeatles(number){
  var array = []
  do{
    array.push("I love the Beatles!")
    number++
  }while(number<15)
  return array;
}
