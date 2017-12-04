function theBeatlesPlay(musicians, instruments){
  var test = [];
  for (var i = 0; i < 4; i++){
    test.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return test;
}

function johnLennonFacts(array){
  var test = [];
  var i = 0;
  while(i < array.length){
   test.push(`${array[i]}!!!`);
   ++i;
  }
  return test;
}

function iLoveTheBeatles(number){
  var test = [];
  do{
    test.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return test;
}
