// add solution here
function theBeatlesPlay(musicians, instruments){
  var array=new Array();
  for(var i=0;i<musicians.length;i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }return array;
}

function johnLennonFacts(array){
  var i=0;
  var array2=new Array();
  while (i<array.length){
    array2.push(`${array[i]}!!!`);
    i++;
  }return array2;
}

function iLoveTheBeatles(num){
  var i=num;
  var array=new Array();
  do{
    array.push("I love the Beatles!");
    i++;
  }while(i<15);return array;
}
