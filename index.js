// add solution here
function theBeatlesPlay(musicians, instruments){
  let array = [];
  for(let i = 0; i < musicians.length; i++){
    let str = musicians[i] + ' plays ' + instruments[i];
    array.push(str);
  }
  return array;
}

function johnLennonFacts(facts){
  let length = facts.length;
  while(length > 0){
    facts[length - 1] = facts[length - 1] + '!!!';
    length--;
  }
  return facts;
}

function iLoveTheBeatles(number){
  let array = [];
  if(number < 15){
    for(let i = 0; i <= number; i++){
      let str = "I love the Beatles!";
      array.push(str);
    }
  }else{
    let str = "I love the Beatles!";
    array.push(str);
  }

  return array;
}
