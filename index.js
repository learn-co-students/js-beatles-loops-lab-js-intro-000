function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (let i=0; i < musicians.length; i++){
    array.push(musicians[i]+" plays "+instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var myArray = [];
  var i = 0;
  while (i < facts.length){
    myArray.push(facts[i]+"!!!");
    i+=1;
  }
  return myArray;
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n<15)

return array;

}
