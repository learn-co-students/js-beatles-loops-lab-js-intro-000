var theBeatlesPlay =(musicians,instruments) =>{
  var plays =[];
  for(let i=0;i<musicians.length;i++){
    plays.push(musicians[i]+" plays "+instruments[i]);
  }
  return plays;
}

var johnLennonFacts =(arr) =>{
  var i=0;
  while(i<arr.length){
    arr[i]  += "!!!";
    i++;
  }
  return arr;
}

var iLoveTheBeatles = (num) =>{
  var arr=[];
  do{
    arr.push("I love the Beatles!");
    num++;
  }while(num<15)
  return arr;
}
