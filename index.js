function theBeatlesPlay(array1, array2){
  var beatles = [];
  for( var i = 0; i < array1.length; i++){
    beatles.push(`${array1[i]} plays ${array2[i]}`);
  }
  return beatles;
}

function johnLennonFacts(array){
  var excited = [];
  let x = 0;
  while(x < array.length){
    excited.push(`${array[x++]}!!!`);
  }
  return excited;
}

function iLoveTheBeatles(num){
  var love = [];
  do{
    love.push("I love the Beatles!");
    num++;
  }while( num < 15 )
  return love;
}
