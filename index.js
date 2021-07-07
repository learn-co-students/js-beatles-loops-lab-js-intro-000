// function theBeatlesPlay(musicians, instruments){
//   var music = []
//   for(var i = 0; i < musicians.length; i++){
//     var muse =
//   }
//   return music + 'plays' + instruments
// }

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  var array = [];
  let count = 0;
  while (count < facts.length){
    array.push(facts[count] + '!!!');
    count++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var newVar = []
  do{
    newVar.push('I love the Beatles!');
    number++
  } while(number < 15)
  return newVar
}
