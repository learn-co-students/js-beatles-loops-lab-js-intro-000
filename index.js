function theBeatlesPlay(musicians, instruments){
  var x = []
   for(let i = 0; i < musicians.length; i++){
    x.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return x
}

function johnLennonFacts(array){
  var a = []
  var i = 0
  while(i < array.length){
      a.push(`${array[i]}!!!`);
        i++;

  }
  return a
}

function iLoveTheBeatles(number){
  var t = []
    do{
      t.push("I love the Beatles!")
    } while(++number < 15);
    return t
}
