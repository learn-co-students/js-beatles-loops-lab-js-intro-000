function theBeatlesPlay(musicians, instruments){
  var plays = [];

  for(
    let i = 0; i < musicians.length; i++){
    plays.push((musicians[i]) + " plays " + (instruments[i]));
  }

  return plays
}



function johnLennonFacts(facts){
  let arr = [];
  let i = 0;

  while (facts.length > i){
    arr.push(facts[i] + '!!!');
    i++
  }

  return arr
}



function iLoveTheBeatles(n){
  var fanatic = [];

  do{
    fanatic.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return fanatic
}
