function theBeatlesPlay(musicians_array, instruments_array){
  var empty_array = []
  for (var i=0; i<musicians_array.length ; i++){
    empty_array.push(`${musicians_array[i]} plays ${instruments_array[i]}`);
  }
  return empty_array
}

function johnLennonFacts(array_about){
  var c = 0;
  var limit = array_about.length;
  while(c<limit){
    array_about[c] = `${array_about[c]}!!!`
    c++;
  }
  return array_about
}

function iLoveTheBeatles(number) {
  var empty_arr = []
  do{
    empty_arr.push("I love the Beatles!")
    number++;
  }while(number<15)
  return empty_arr
}
