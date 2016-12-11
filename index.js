function theBeatlesPlay(arrayMusicians,arrayInstruments){
  var play=[];
  for(var i=0; i < arrayMusicians.length; i++){
    play[i]= `${arrayMusicians[i]} plays ${arrayInstruments[i]}`
  }
  return play;
};
function johnLennonFacts(arrayName){
  var  i=0 ;
  while (i<arrayName.length) {
    arrayName[i] = arrayName[i].concat('!!!')
    i ++
  }
  return arrayName;
};

function iLoveTheBeatles(number) {
  var arrayName = []
  do {
    arrayName.push("I love the Beatles!")
    number = number + 1
  } while (number < 15)
  return arrayName
}
