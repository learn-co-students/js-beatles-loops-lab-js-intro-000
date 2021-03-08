// add solution here
function theBeatlesPlay(musicians, instruments){
var array = [];
for(var i = 0; i < musicians.length; i++){
  array.push(musicians[i] + " plays " + instruments[i]);
}
return array;
}
function johnLennonFacts(info){
  let i = 0;
  while(i < info.length){
    info[i] = info [i] + "!!!"
    i++
  }
  return info
}
function iLoveTheBeatles(arg){
  let array = [];
  do{
    array.push("I love the Beatles!")
    arg++
  }
  while(arg < 15);
  return array;
}
