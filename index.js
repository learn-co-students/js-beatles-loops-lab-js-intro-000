function theBeatlesPlay(musicians, instruments) {
  var ans = [];
  for(let i=0; i<musicians.length; i++){
    ans.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return ans;
}

function johnLennonFacts(array) {
  var i = 0;
  while(i<array.length){
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var ans = [];
  do {
    ans.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return ans;
}
