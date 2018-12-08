// add solution here
function theBeatlesPlay(musicans, instruments){
  
  var array = [];
  
  for(var i = 0; i <= musicans.length - 1; i++){

      array.push(musicans[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts){
  var result = [];
  var i= 0;
  while (i < facts.length){
    result.push(facts[i] + "!!!");
    i++;
  }
  return result
}


function iLoveTheBeatles(number){
  
  var emptyArray = [];
  
  do{
    emptyArray.push("I love the Beatles!")
    number++
  }
  while(number < 15)
  return emptyArray
}