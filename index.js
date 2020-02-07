function theBeatlesPlay(musicians,instruments){
  var empty = []
  for(let i=0 ; i < musicians.length ; i++){

    empty.push(musicians[i]+" plays "+instruments[i])

  }
  return empty
}// add solution here
function johnLennonFacts(facts){
  var i =0;
  var array = [];
  while(i<facts.length){
    array.push(facts[i]+"!!!");
    i++;
  }
  return array

}
function iLoveTheBeatles(num){
  var empty = [];
  do{
    empty.push("I love the Beatles!")
    num++
  }while(num<15);
  return empty
}
