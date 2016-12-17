function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
    newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArr;
}

function johnLennonFacts(arr){
  var i = 0;
  var newArr = [];
  while(i < arr.length){
    newArr.push(arr[i] + '!!!');
    //newArr.push(`${arr[i]}!!!`);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  }while(num < 15);
return arr;
}
