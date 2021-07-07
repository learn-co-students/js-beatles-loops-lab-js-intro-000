// add solution here
function theBeatlesPlay(musicians, instruments) {
var array = [];
  for(let i=0; i < musicians.length; i++){
    let musician = musicians[i];
    let instrument = instruments[i];
    array.push(musician+" plays "+instrument);
  }
  return array;
}

function johnLennonFacts(facts){
  let i =0;
  while( i < facts.length){
    facts[i]=facts[i]+"!!!";
    i++
  }
  return facts;
}

function iLoveTheBeatles(num){
  var array=[];
  var i=0;
  do{
    array[i]="I love the Beatles!";
    num++;
    i++;
  }while(num<15);
  return array;
}
