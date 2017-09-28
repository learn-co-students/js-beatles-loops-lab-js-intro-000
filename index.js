function theBeatlesPlay(musicians,instruments){
  var arr = [];
  for(var i=0; i<4; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr
}


function johnLennonFacts(facts){
  var strings = [];
  for (var i = 0; i < facts.length; i++) {
    strings.push(facts[i] + "!!!" )
}
  return(strings);
}

function iLoveTheBeatles(num){
  var empt_arr = [];
  do{
    empt_arr.push("I love the Beatles!")
    num++
  }while (num < 15)
  return empt_arr;
}
