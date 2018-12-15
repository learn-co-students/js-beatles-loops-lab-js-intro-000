// add solution here
function theBeatlesPlay(musicians,instruments){
  var empty =[];
  for(var i=0;i<musicians.length;i++){
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}
function johnLennonFacts(array){
  var num=0;
  while(num < array.length){
    array[num]=array[num]+'!!!';
    num++;
  }
  return array;
}
function iLoveTheBeatles(num){
  var empty =[];
  do{
    empty.push(`I love the Beatles!`);
    num = num+1;
  }while(num<15);
  return empty;
}