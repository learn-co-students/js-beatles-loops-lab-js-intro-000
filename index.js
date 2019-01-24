// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  let array= []
  for(let i=0;i<arrayMusicians.length; i++){
    array.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var i= 0;
  var array = [];
  while(i<facts.length){
    array.push(facts[i] + '!!!');
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array =[]
  do{
    array.push("I love the Beatles!");
     number++
  }
  while (number<15);
    return array
}
