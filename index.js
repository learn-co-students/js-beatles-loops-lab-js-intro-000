var musicians=[];
var instruments=[];
function theBeatlesPlay(musicians,instruments){
  var n=musicians.length;
  var array1=[];
  for(let i=0;i<n;i++){
    array1.push(musicians[i]+" plays "+instruments[i]);
  }
  return array1;
}
var facts=[];
function johnLennonFacts(facts){
  var n=facts.length;
  var array2=[];
  for(let i=0;i<n;i++){
    array2.push(facts[i]+"!!!");
  }
  return array2;
}
var num;
function iLoveTheBeatles(num){
  var arr=[];
  var m=15-num;
  var i=0;
  do{
    arr.push("I love the Beatles!")
    i++;
  }while(i<m && num<15);
  return arr;
}