function theBeatlesPlay(musicians, instruments) {
  var statements = []
  for(let i = 0; i < musicians.length; i++) {
  statements.push(musicians[i] + " plays " + instruments[i])
}
  return statements
}

function johnLennonFacts(array){
  let n = 0
  while (n<array.length) {
    array[n] = (array[n] + "!!!")
    n++
  }
  return array
}

function iLoveTheBeatles(n){
  var array = [];
  do{
    array.push("I love the Beatles!");
    n++;
  } while (n<15);
  return array
}
