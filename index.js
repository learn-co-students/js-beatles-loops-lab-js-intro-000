// theBeatlesPlay case

function theBeatlesPlay(musicians, instruments){
    var strings = []
      var i = musicians.length && instruments.length
      for (i = 0; i < musicians.length && i < instruments.length; i++){
        strings.push(musicians[i] + ' plays ' + instruments[i])
      }
    return strings
}
//johnLennonFacts case
function johnLennonFacts(facts){
  var facts2 = []
  var counter = 0;
  while (counter < facts.length){
    facts2.push(facts[counter] + "!!!")
    counter++
  }
  console.log(facts2)
  return facts2
}
// iLoveTheBeatles case
function iLoveTheBeatles(i){
  var array = [];
  do {
    array.push("I love the Beatles!");
    i++;
  }
  while (i < 15){
    return array;
  };

}
