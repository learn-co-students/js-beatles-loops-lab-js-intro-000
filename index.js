function theBeatlesPlay(musicians, instruments){
  var array = new Array();
  var l = musicians.length
  for(var i = 0; i < l; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array){
  var i = 0
  var facts = new Array();
  while( i < array.length ){
    facts.push(`${array[i]}!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var array = new Array()
  do{
    array.push("I love the Beatles!")
    number++
  }while(number < 15);
  return array
}
