function theBeatlesPlay(musicians_array,instruments_array) {
  var array=[];
  for(var i=0;i<musicians_array.length;i++) {
    var s=`${musicians_array[i]} plays ${instruments_array[i]}`;
    array.push(s);

  }
  return array;
}

function johnLennonFacts(facts) {
  var i=0;
  while(i<facts.length) {
    facts[i]=""+facts[i]+"!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array=[];
  do{
    array.push('I love the Beatles!');
    number++;
  }while(number<15);
  return array;
}
