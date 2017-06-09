function theBeatlesPlay(musicians, instruments){
  let arr = [];
    for (let i = 0; i < musicians.length; i++){
      arr.push(`${musicians[i]} plays ${instruments[i]}`);
    };
  return arr;
}

function johnLennonFacts(arr){
  let counter = 0;
  while (counter < arr.length){
    arr[counter] = `${arr[counter]}!!!`
    counter ++
  }
  return arr;
}

function iLoveTheBeatles(num){
  let arr = [];
  do{
    arr.push("I love the Beatles!");
    num++
  }while(num<15);
return arr;
}
